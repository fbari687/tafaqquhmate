import { Link } from "@inertiajs/react";
import { ReactTyped } from "react-typed";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Intersection } from "@splidejs/splide-extension-intersection";
import "@splidejs/react-splide/css";

const Hero = () => {
    let quotes = [
        `"Raihlah ilmu dan untuk meraih ilmu, belajarlah untuk tenang dan sabar." - Umar bin Khattab`,
        `"Ilmu bukanlah dengan banyaknya riwayat. Ilmu tidak lain adalah sebuah cahaya yang Allah tempatkan di dalam hati." - Imam Malik`,
        `"Sesungguhnya yang takut kepada Allah di antara hamba-hamba-Nya, hanyalah para ulama (orang-orang yang berilmu)." (Q.S Fathir: 28)`,
        `"Ilmu tanpa amal adalah kegilaan, dan amal tanpa ilmu adalah kesia-siaan." - Imam Ghazali`,
        `"Menuntut ilmu (agama) adalah kewajiban bagi setiap muslim." - Hadis`,
        `"Bukan ilmu yang seharusnya mendatangimu, tapi kamu yang seharusnya mendatangi ilmu." - Imam Malik`,
        `"Siapa yang menempuh jalan untuk mencari ilmu, maka Allah akan mudahkan baginya jalan menuju surga." - Hadis`,
        `"Tahapan pertama dalam mencari ilmu adalah mendengarkan, kemudian diam dan menyimak dengan penuh perhatian, lalu menjaganya, lalu mengamalkannya, dan kemudian menyebarkannya." - Sufyan bin Uyainah`,
        `"Ilmu adalah kehidupan bagi pikiran." - Abu Bakar`,
        `"Jika seorang mencari ilmu, maka itu akan tampak di wajah, tangan dan lidahnya serta dalam kerendahan hatinya kepada Allah." - Hasan al-Bashri`,
        `"Ilmu adalah yang memberikan manfaat, bukan yang sekadar hanya dihafal." - Imam Syafi'i`,
        `"Esensi dari ilmu adalah untuk mengetahui apa itu ibadah dan ketaatan." - Imam Ghazali`,
        `"Ilmu itu ada dua macam: apa yang diserap dan yang didengar. Dan yang didengar tidak akan memberikan manfaat jika tidak diserap." - Ali bin Abi Thalib`,
        `"Menuntut ilmu di masa muda bagai mengukir di atas batu." - Hasan al-Bashri`,
        `"Barangsiapa belajar sesuatu semata-mata karena Allah, mencari ilmu yang ada bersama-Nya, maka dia akan menang. Dan barang siapa yang belajar sesuatu karena selain Allah, maka dia tidak akan mencapai tujuannya, juga pengetahuan yang diperolehnya tidak akan membawanya lebih dekat kepada Allah." - Hasan al-Basri`,
        `"Karunia Allah yang paling lengkap adalah menjalani kehidupan berdasarkan ilmu." - Ali bin Abi Thalib`,
        `"Allah akan mengangkat derajat orang-orang yang beriman dan orang-orang yang berilmu di antara kamu sekalian." (Q.S Al-Mujadilah: 11)`,
        `"Tuntutlah ilmu. Di saat kamu miskin, ia akan menjadi hartamu. Di saat kamu kaya, ia akan menjadi perhiasanmu." - Luqman al-Hakim`,
    ];

    return (
        <section className="bg-[#FFF8E1] dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-10 relative">
                {/* Border Start */}
                {/* <div className="absolute bg-green-500 top-0 left-0 h-10 w-0.5 dark:bg-gray-400"></div>
                <div className="absolute bg-green-500 top-0 left-0 h-0.5 w-10 dark:bg-gray-400"></div>
                <div className="absolute bg-yellow-300 bottom-0 right-0 h-0.5 w-10 dark:bg-gray-400"></div>
                <div className="absolute bg-yellow-300 bottom-0 right-0 h-10 w-0.5 dark:bg-gray-400"></div> */}
                {/* Border End */}
                <div className="mr-auto h-full lg:col-span-7 w-full lg:w-5/6">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        TafaqquhMate
                    </h1>
                    {/* <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            From checkout to global sales tax compliance,
                            companies around the world use Flowbite to simplify
                            their payment stack.
                        </p> */}
                    <div className="h-28 w-full dark:text-white">
                        <ReactTyped
                            strings={quotes}
                            typeSpeed={40}
                            backSpeed={10}
                            loop
                            shuffle
                        />
                    </div>
                    <Link
                        href={"/materi"}
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-[#2C7866] text-white border border-gray-300 rounded-lg hover:bg-[#246354] transition duration-150 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Mulai Belajar
                    </Link>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-3 lg:flex shadow-lg">
                    <Splide
                        options={{
                            type: "loop",
                            arrows: false,
                            autoplay: true,
                            pagination: false,
                            intersection: {
                                inView: {
                                    autoplay: true,
                                },
                                outView: {
                                    autoplay: false,
                                },
                            },
                        }}
                        aria-label="Images"
                    >
                        <SplideSlide>
                            <img
                                src="/storage/localImage/Belajar.png"
                                className="rounded-xl aspect-square object-cover"
                                alt="mockup"
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="/storage/localImage/hero2.jpg"
                                className="rounded-xl aspect-square object-cover"
                                alt="mockup"
                            />
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </section>
    );
};

export default Hero;
