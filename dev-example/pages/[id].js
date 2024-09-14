import React from 'react'
import Head from 'next/head'
import NextImg from 'next/image'
import { getDatabase, getPage, getBlocks } from '../lib/notion'
import Link from 'next/link'
import { databaseId } from './blog.js'

import { Render, withContentValidation } from '@9gustin/react-notion-render'

import Header from '../components/Header'
import CustomCode from '../components/CustomCode'
import MyTableOfContents from '../components/TableOfContents'

import styles from './index.module.css'

const myMapper = {
  heading_1: withContentValidation(({ children }) => (
    <h1 className='my-class'>test:{children}</h1>
  )),
  image: withContentValidation(({ media }) => (
    <NextImg src={media.src} width='100' height='100' />
  )),
  code: withContentValidation(CustomCode)
}

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />
  }

  return (
    <>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.container}>
        <Header />
        <MyTableOfContents blocks={blocks} />
        <article>
          <Render blocks={[page.properties.Name]} />
          <section>
            <Render
              blocks={blocks}
              blockComponentsMapper={myMapper}
              emptyBlocks
              classNames
              useStyles
            />
            <Link className={styles.back} href='/blog'>
              ← Go home
            </Link>
          </section>
        </article>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId)
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const page = await getPage(id)
  const blocks = await getBlocks(id)

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id)
        }
      })
  )
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type].children = childBlocks.find(
        (x) => x.id === block.id
      )?.children
    }
    return block
  })

  return {
    props: {
      page,
      blocks: blocksWithChildren
    },
    revalidate: 1
  }
}
