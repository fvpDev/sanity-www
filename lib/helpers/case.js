export function capitalize(word) { return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase() }

/** ID **/
export function nameToID(name) { return name.split(' ').join('-').toLowerCase() }
export function idToName(id) { return id.split('-').map(word => capitalize(word)).join(' ') }
export function idToCamel(id) {
  return id.split('-').map((word, i) => {
    return i == 0 ? word.toLowerCase() : capitalize(word)
  }).join('')
}

/** Slug **/
export function slugToName(slug) { return slug.split('_').map(word => capitalize(word)).join(' ') }

/** Path **/
export function nameToPath(name) { return name.split(' ').join('-').toLowerCase() }
export function pathToName(path) {
  return path.split('/').map((slug) => {
    return slug.split('-').map(word => capitalize(word)).join(' ')
  }).join(' | ')
}
