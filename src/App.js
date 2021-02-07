import { lazy, Suspense } from "react"
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from './config/firebase-config';


export const App = () => {

  const Feed =  lazy(() => import(`./pages/Feed`));

  return (
      <>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <Suspense fallback={'Waiting...'}>
            <Feed></Feed>
          </Suspense>
        </FirebaseAppProvider>
      </>
    ) 

}