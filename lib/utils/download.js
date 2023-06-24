export function download(data, filename) {
  const str = JSON.stringify(data, null, 2)
  const blob = new Blob([str])
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  window.URL.revokeObjectURL(url)
}
