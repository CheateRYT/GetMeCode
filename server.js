import http from 'http'

const PORT = 5000

const server = http.createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

	if (req.method === 'OPTIONS') {
		res.writeHead(204)
		res.end()
		return
	}

	if (req.method === 'POST' && req.url === '/executions') {
		let body = ''
		req.on('data', chunk => {
			body += chunk.toString()
		})
		req.on('end', () => {
			const { language, code } = JSON.parse(body)
			let output = ''
			let status = 'success'
			let error = null

			if (language === 'javascript') {
				if (code.includes('console.log')) {
					output = 'Hello, world!\n'
				} else {
					status = 'error'
					error = 'SyntaxError: Unexpected token'
				}
			} else if (language === 'python') {
				if (code.includes('print')) {
					output = 'Hello, world!\n'
				} else {
					status = 'error'
					error = 'SyntaxError: Invalid syntax'
				}
			}

			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(JSON.stringify({ status, output, error }))
		})
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' })
		res.end('Not Found')
	}
})

server.listen(PORT, () => {
	console.log(`Server is running on http:`)
})
