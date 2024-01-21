"use client"
import { FacebookIcon, FacebookShareButton } from "react-share";

export default function Home() {
  return (
    <main>
      <div>
        <h1>WELCOME TO SHARE-MATE</h1><br /><br />
        <h5>Click to start share POSTS to your Facebook Timeline</h5>
        <h1>Facebook Share Example</h1>
        <FacebookShareButton
          url={"https://www.facebook.com/syedahsanshah.sherazi.9/posts/pfbid0rf47n5WNh2t5AXVidr4kKV13tjoru5AM3UAC1eyyAG8gVa3Yxub8mqaMaFDdoi16l?comment_id=349529657939772&notif_id=1705853557311130&notif_t=comment_mention&ref=notif"}
          // quote={"フェイスブックはタイトルが付けれるようです"}
          hashtag={"#hashtag"}
          // description={"aiueo"}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>


    </main >
  );
}
