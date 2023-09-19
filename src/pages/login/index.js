import Head from 'next/head'
import { siteTitle } from '@/components/layout'

export default function Home() {
  return (<>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main class="bg-primary w-screen h-screen flex pt-44">
        <div class="m-auto flex flex-col gap-8">
          <div class="flex flex-col align-middle justify-center w-96">
            <label class="font-bold text-lg bg-secondary py-2.5 box-border w-32 rounded-t-2xl mx-auto flex justify-center text-white text"> login </label>
            <input placeholder="_" class="block py-2 px-6 w-96 rounded-2xl" type="text" />
          </div>
          <div class="flex flex-col align-middle justify-center w-96">
            <label for="pass" class="font-bold text-lg bg-secondary py-2.5 box-border w-32 rounded-t-2xl mx-auto flex justify-center text-white text"> password </label>
            <input placeholder="_" type="password" class="block py-2 px-6 w-96 rounded-2xl" id="pass" name="password" minlength="8" required />
          </div>
          <button class="bg-darkgreen font-bold text-lg px-8 py-2 w-32 rounded-2xl mx-auto flex justify-center text-white text">
            enter
          </button>
        </div>
      </main>
  </>)
}
