"use client"
import { FacebookIcon, FacebookShareButton } from "react-share";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <br /><br />
        <h1>WELCOME TO SHARE-MATE</h1><br /><br />
        <h5>Click to start share POSTS to your Facebook Timeline</h5>
        <FacebookShareButton
          title="From Share-mate"
          url={"https://www.facebook.com/syedahsanshah.sherazi.9/posts/pfbid0rf47n5WNh2t5AXVidr4kKV13tjoru5AM3UAC1eyyAG8gVa3Yxub8mqaMaFDdoi16l?comment_id=349529657939772&notif_id=1705853557311130&notif_t=comment_mention&ref=notif"}
          hashtag={"#hashtag"}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>

    </main>
  );
}
