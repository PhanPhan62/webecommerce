import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes'
import { ThemeProvider } from './context/ThemeContext'
// import { ScrollArea } from "@/components/ui/scroll-area"

const router = createBrowserRouter(routes)
createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        {/* <ScrollArea className="rounded-md border"> */}
            <RouterProvider router={router} />
        {/* </ScrollArea> */}
    </ThemeProvider>
)
