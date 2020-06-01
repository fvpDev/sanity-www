export default function Container({ children }) {
  return <main className={
    "w-full mx-auto px-3" +
    " sm:max-w-screen-sm sm:px-5" +
    " md:max-w-screen-md md:px-10" +
    " lg:max-w-screen-lg lg:px-24" +
    " xl:max-w-screen-xl xl:px-70"
  }>{children}</main>
}
