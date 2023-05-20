import Link from "next/link";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div div className=" h-screen justify-center py-40">
      <header className="w-64 mx-auto">
        {/* <nav className="flex justify-between">
          <Link
            href="/signup"
            className="border-solid border-2 rounded-full absolute right-48 top-10 px-6 py-2 text-md hover:bg-white hover:text-black"
          >
            Kayıt Ol
          </Link>
          <Link
            href="/signin"
            className="border-solid border-2 absolute right-12 top-10 fixed rounded-full px-6 py-2 text-md hover:bg-white hover:text-black"
          >
            Giriş Yap
          </Link>
        </nav> */}
      </header>
      <main>
        <div>
          <h1 className="text-9xl text-white/80 text-center py-24 font-bold tracking-wider">
            hyro's page
          </h1>
        </div>
        <div className="">
          <h1 className="px-6 py-4 text-2xl text-white/80 font-mono">
            Technologies I Use
          </h1>
          <div className=" px-40 bg-slate-950 bg-[#030712] border border-4 border-gray-900">
            <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 ">
              <Link href="" class="w-full max-w-sm slate-950 rounded-lg shadow">
                <div>
                  <img
                    class="p-8 h-40 w-full object-contain rounded-t-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="https://cdn.cdnlogo.com/logos/c/68/c-sharp-800x800.png"
                    alt="product image"
                  />
                </div>
                <div class="px-5  pb-5">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                    C#
                  </h5>
                </div>
              </Link>

              <Link
                href=""
                class="w-full max-w-sm bg-slate-950 rounded-lg shadow  "
              >
                <div>
                  <img
                    class="p-8 w-full h-40 object-contain rounded-t-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-3000"
                    src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png"
                  />
                </div>
                <div class="px-5 pb-5">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                    JavaScript
                  </h5>
                </div>
              </Link>

              <Link
                href=""
                class="w-full max-w-sm bg-slate-950 rounded-lg shadow"
              >
                <div>
                  <img
                    class="p-8 w-full h-40 object-contain rounded-t-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"
                    alt="product image"
                  />
                </div>
                <div class="px-5 pb-5">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                    Python
                  </h5>
                </div>
              </Link>

              <Link
                href=""
                class="w-full  max-w-sm slate-950 rounded-lg shadow"
              >
                <div>
                  <img
                    class="p-8 w-full h-40 object-contain rounded-t-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png "
                    alt="product image"
                  />

                  <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                      React
                    </h5>
                  </div>
                </div>
              </Link>

              <Link
                href=""
                class="w-full  max-w-sm slate-950 rounded-lg shadow"
              >
                <div>
                  <img
                    class="p-8 w-full h-40 object-contain rounded-t-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/2048px-Lua-Logo.svg.png"
                    alt="product image"
                  />

                  <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                      Lua
                    </h5>
                  </div>
                </div>
              </Link>

              <Link
                href=""
                class="w-full  max-w-sm bg-slate-950 rounded-lg shadow"
              >
                <div>
                  <img
                    class="p-8 w-full h-40 object-contain rounded-t-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png"
                    alt="product image"
                  />

                  <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                      Selenium
                    </h5>
                  </div>
                </div>
              </Link>

              <Link
                href=""
                class="w-full  max-w-sm bg-slate-950 rounded-lg shadow"
              >
                <div>
                  <img
                    class="p-8 w-full h-40 object-contain rounded-t-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="https://www.coffeeclass.io/logos/chakra-ui.png "
                    alt="product image"
                  />

                  <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                      Chakra UI
                    </h5>
                  </div>
                </div>
              </Link>

              <Link
                href=""
                class="w-full  max-w-sm bg-slate-950 rounded-lg shadow"
              >
                <div>
                  <img
                    class="p-8 w-full h-40 object-contain rounded-t-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png"
                    alt="product image"
                  />

                  <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                      TypeScript
                    </h5>
                  </div>
                </div>
              </Link>

              <Link
                href=""
                class="w-full  max-w-sm bg-slate-950 rounded-lg shadow"
              >
                <div>
                  <img
                    class="p-8 w-full h-40 object-contain rounded-t-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="https://logospng.org/download/css-3/logo-css-3-1536.png"
                    alt="product image"
                  />

                  <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                      CSS
                    </h5>
                  </div>
                </div>
              </Link>

              <Link
                href=""
                class="w-full  max-w-sm bg-slate-950 rounded-lg shadow"
              >
                <div>
                  <img
                    class="p-8 w-full h-40 object-contain rounded-t-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/tailwind-css-icon.png"
                    alt="product image"
                  />

                  <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                      Tailwind UI
                    </h5>
                  </div>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}
