import { lazy, Suspense } from "react"
import { FirebaseAppProvider } from "reactfire";
import { Loading } from "./components/Loading";
import firebaseConfig from './config/firebase-config';


export const App = () => {

  const Feed =  lazy(() => import(`./pages/Feed`));


  return (
      <>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <Suspense fallback={
            <Loading />
          }>
            <Feed />
          </Suspense>
        </FirebaseAppProvider>
      </>
    ) 

}