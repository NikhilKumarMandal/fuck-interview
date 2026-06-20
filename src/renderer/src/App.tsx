import { QueryProvider } from "./providers/query-provider"
import { ToastProvider } from "./providers/toast-provider"


function App(): React.JSX.Element {

  return (
    <QueryProvider>
      <ToastProvider>
        <div className="relative">
          
        </div>
      </ToastProvider>
    </QueryProvider>
  )
}

export default App
