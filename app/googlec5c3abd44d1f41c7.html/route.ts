export function GET() {
	return new Response('google-site-verification: googlec5c3abd44d1f41c7.html', {
		headers: {
			'Content-Type': 'text/html',
		},
	});
}
