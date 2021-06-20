export function idFromString(text: string) {
  return text.replace(/[^A-Z0-9]/ig, "-").toLocaleLowerCase()
}
