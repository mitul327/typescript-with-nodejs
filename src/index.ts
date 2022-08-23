import app from './app'

const port = process.env.PORT || 8000

app.listen(port, (): void => {
  console.log(`Server Running here 👉 https://localhost:${port}`)
})
