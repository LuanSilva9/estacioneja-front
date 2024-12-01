function formatString(string) {
    return string.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]/g, '')
}

export { formatString };