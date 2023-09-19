import Head from 'next/head'
import { siteTitle } from '@/components/layout'

export default function Home() {
  return (<>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main class="bg-primary w-screen h-screen flex">
        <div class="m-auto flex flex-col gap-16">
          <div class="flex flex-col align-middle justify-center w-96">
            <label class="bg-secondary p-3 w-32 rounded-t-2xl mx-auto flex justify-center text-white text"> login </label>
            <input placeholder="Enter your nickname" class="block py-3 px-8 w-96 rounded-2xl" type="text" />
          </div>
          <div class="flex flex-col align-middle justify-center w-96">
            <label for="pass" class="bg-secondary p-3 w-32 rounded-t-2xl mx-auto flex justify-center text-white text"> password </label>
            <input placeholder="Enter your password" type="password" class="block py-3 px-8 w-96 rounded-2xl" id="pass" name="password" minlength="8" required />
          </div>
        </div>
      </main>
  </>)
}
