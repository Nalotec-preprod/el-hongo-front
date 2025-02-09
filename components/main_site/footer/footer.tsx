import Link from "next/link"

export default function SocialBar() {
  return (
    <div className="fixed right-0 top-[50px] z-10 backdrop-blur-md backdrop-filter md:top-[96px]">
      <div className="rounded-b-lg bg-heroBlackOverlay">
        <div className="flex items-center justify-start gap-1 py-2 text-sm text-gray-700">
          <Link
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100058272862175"
            className="px-4"
          >
            <img src="/images/facebook-icon.png" className="h-7" />
          </Link>

          <Link
            target="_blank"
            href="https://www.instagram.com/elhongomx"
            className="px-4"
          >
            <img src="/images/instagram-icon.png" className="h-7" />
          </Link>
        </div>
      </div>
    </div>
  )
}
