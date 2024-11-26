<?php

namespace Database\Seeders;

use App\Models\Material;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MaterialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Material::create([
            'title' => "Sumber Ajaran Islam",
            'slug' => "sumber-ajaran-islam",
            'image' => 'material-images/quran.jpg',
            'excerpt' => "Islam sebagai agama yang berlaku abadi dan berlaku untuk seluruh umat manusia mempunyai sumber yang lengkap pula. Sumber ajaran Islam adalah Al-Qur'an dan Sunnah yang sangat lengkap. Pertanyaan yang akan timbul adalah mengapa ijtihad dijadikan sebagai sumber hukum atau sumber ajaran Islam, padahal AI-Qur'an dan Sunnah telah cukup lengkap.",
            'body' => "<p><strong>Islam</strong> sebagai agama yang berlaku abadi dan berlaku untuk seluruh umat manusia mempunyai sumber yang lengkap pula. Sumber ajaran Islam adalah Al-Qur'an dan Sunnah yang sangat lengkap. Pertanyaan yang akan timbul adalah mengapa ijtihad dijadikan sebagai sumber hukum atau sumber ajaran Islam, padahal AI-Qur'an dan Sunnah telah cukup lengkap.</p>",
            'user_id' => 2,
        ]);

        Material::create([
            'title' => "Perkembangan Ipteks dalam Islam",
            'slug' => "perkembangan-ipteks-dalam-islam",
            'image' => 'material-images/ipteks.jpg',
            'excerpt' => "Dalam islam sendiri, alquran tidak pernah mengekang umatnya untuk maju dan modern, justru islam sangat mendukung kemajuan umatnya untuk melakukan penelitian dan bereksperimen dalam bidang apapun termasuk dalam bidang teknologi. Bagi islam, teknologi merupakan bagian dari ayat-ayat allah yang perlu kita gali dan kita cari kebenarannya, misalnya dalam ayat alquran dibawah ini",
            'body' => "<p>Dalam islam sendiri, alquran tidak pernah mengekang umatnya untuk maju dan modern, justru islam sangat mendukung kemajuan umatnya untuk melakukan penelitian dan bereksperimen dalam bidang apapun termasuk dalam bidang teknologi. Bagi islam, teknologi merupakan bagian dari ayat-ayat allah yang perlu kita gali dan kita cari kebenarannya, misalnya dalam ayat alquran dibawah ini</p><p>Artinya: <em>Sesungguhnya dalam penciptaan langit dan bumi, dan silih bergantinya malam dan siang terdapat tanda-tanda bagi orang-orang yang berakal, (yaitu) orang-orang yang mengingat Allah sambil berdiri atau duduk atau dalam keadan berbaring dan mereka memikirkan tentang penciptaan langit dan bumi (seraya berkata): Ya Tuhan kami, tiadalah Engkau menciptakan Ini dengan sia-si. Maha Suci Engkau, Maka peliharalah kami dari siksa neraka</em>. QS. Ali-Imran: 190-191).</p><p>Ayat-ayat diatas menjelaskan bahwa semua yang ada dilangit dan bumi yang penuh misteri ini dapat kita mencari tahu kebenarannya dengan melakukan penelitian-penelitian yang kita lakukan. Dengan kita sebagai umat islam melakukan penenlitian tersebut diharapkan dapat membantu kita dalam mencari kemudahan hidup baik didunia maupun diakhirat dalam bidang apapun termasuk teknologi. Selain banyak memuat tentang pentingnya pengembangan sains, Alquran juga dapat dijadikan sebagai inspirasi ilmu dan pengembangan wawasan berpikir sehingga mampu menciptakan sesuatu yang baru dalam kehidupan. Hanya saja, untuk menemukan hal tersebut, dibutuhkan kemampuan untuk menggalinya secara lebih mendalam agar potensi alamiah yang diberikan Tuhan dapat memberikan kemaslahatan sepenuhnya bagi keselarasan alam dan manusia.</p>",
            'user_id' => 1,
        ]);
    }
}
