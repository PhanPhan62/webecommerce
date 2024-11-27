import App from "@/App"; 
import { HomePages, PublicLayout, About } from "@/pages/public";
import { pathnames } from "@/lib/pathname";


const routes = [
  {
    path: pathnames.app,
    element: <App />,
    children: [
      {
        path: pathnames.publics.layout,
        element: <PublicLayout />,
        children: [
          { path: pathnames.publics.homepage, element: <HomePages /> }, 
          { path: pathnames.publics.about, element: <About /> },
        ]
      },

    ]

  }
]

export default routes