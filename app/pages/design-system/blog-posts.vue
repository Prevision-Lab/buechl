<template>
  <div class="max-w-7xl mx-auto p-8">
    <!-- Page Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">BÜCHL BlogPost Komponensek</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        Blog bejegyzés kártyák különböző elrendezésekkel és stílusokkal
      </p>
    </div>

    <!-- Grid of Blog Posts -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Grid Layout (3 oszlop)</h2>
      <div class="grid gap-8 lg:grid-cols-3">
        <BuchlBlogPost
          v-for="post in blogPosts"
          :key="post.id"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :to="post.slug"
          :category="post.category"
          :author="post.author"
          :date="post.publishedAt"
          :reading-time="post.readingTime"
        />
      </div>
    </section>

    <!-- Two Column Layout -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Grid Layout (2 oszlop)</h2>
      <div class="grid gap-8 md:grid-cols-2">
        <BuchlBlogPost
          v-for="post in blogPosts.slice(0, 4)"
          :key="post.id"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :to="post.slug"
          :category="post.category"
          :author="post.author"
          :date="post.publishedAt"
          :reading-time="post.readingTime"
        />
      </div>
    </section>

    <!-- Horizontal Layout -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Horizontal Layout</h2>
      <div class="space-y-8">
        <BuchlBlogPostHorizontal
          v-for="post in blogPosts.slice(0, 3)"
          :key="post.id"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :to="post.slug"
          :category="post.category"
          :author="post.author"
          :date="post.publishedAt"
          :reading-time="post.readingTime"
        />
      </div>
    </section>

    <!-- Mixed Layout -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Mixed Layout</h2>
      <!-- Featured Post -->
      <div class="mb-8">
        <BuchlBlogPostHorizontal
          :title="blogPosts[0].title"
          :description="blogPosts[0].description"
          :image="blogPosts[0].image"
          :to="blogPosts[0].slug"
          :category="blogPosts[0].category"
          :author="blogPosts[0].author"
          :date="blogPosts[0].publishedAt"
          :reading-time="blogPosts[0].readingTime"
        />
      </div>
      <!-- Recent Posts Grid -->
      <div class="grid gap-8 lg:grid-cols-3">
        <BuchlBlogPost
          v-for="post in blogPosts.slice(1, 4)"
          :key="post.id"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :to="post.slug"
          :category="post.category"
          :author="post.author"
          :date="post.publishedAt"
          :reading-time="post.readingTime"
        />
      </div>
    </section>

    <!-- No Image Examples -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Képek Nélkül</h2>
      <div class="grid gap-8 lg:grid-cols-3">
        <BuchlBlogPost
          v-for="post in blogPostsNoImage"
          :key="post.id"
          :title="post.title"
          :description="post.description"
          :to="post.slug"
          :category="post.category"
          :author="post.author"
          :date="post.publishedAt"
          :reading-time="post.readingTime"
        />
      </div>
    </section>

    <!-- Custom Footer Example -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Egyedi Footer</h2>
      <div class="grid gap-8 lg:grid-cols-3">
        <BuchlBlogPost
          :title="blogPosts[0].title"
          :description="blogPosts[0].description"
          :image="blogPosts[0].image"
          :to="blogPosts[0].slug"
          :category="blogPosts[0].category"
          :author="blogPosts[0].author"
          :date="blogPosts[0].publishedAt"
          :reading-time="blogPosts[0].readingTime"
        >
          <template #footer>
            <div class="flex items-center justify-between">
              <UButton 
                label="Részletek" 
                size="sm" 
                variant="soft"
                color="primary"
                class="rounded-none"
              />
              <UButton 
                icon="i-heroicons-heart" 
                size="sm" 
                variant="ghost"
                color="error"
                class="rounded-none"
              />
            </div>
          </template>
        </BuchlBlogPost>

        <BuchlBlogPost
          :title="blogPosts[1].title"
          :description="blogPosts[1].description"
          :image="blogPosts[1].image"
          :to="blogPosts[1].slug"
          :category="blogPosts[1].category"
          :author="blogPosts[1].author"
          :date="blogPosts[1].publishedAt"
          :reading-time="blogPosts[1].readingTime"
          :show-read-more="false"
        >
          <template #footer>
            <div class="flex items-center justify-between">
              <div class="flex gap-2">
                <UIcon name="i-heroicons-eye" class="w-4 h-4 text-gray-500" />
                <span class="text-sm text-gray-500">432 olvasás</span>
              </div>
              <UIcon name="i-heroicons-bookmark" class="w-5 h-5 text-gray-400 hover:text-primary-500 cursor-pointer" />
            </div>
          </template>
        </BuchlBlogPost>

        <BuchlBlogPost
          :title="blogPosts[2].title"
          :description="blogPosts[2].description"
          :image="blogPosts[2].image"
          :to="blogPosts[2].slug"
          :category="blogPosts[2].category"
          :author="blogPosts[2].author"
          :date="blogPosts[2].publishedAt"
          :reading-time="blogPosts[2].readingTime"
        >
          <template #footer>
            <div class="flex gap-4">
              <UButton 
                label="Olvasás" 
                size="sm" 
                color="primary"
                block
                class="rounded-none"
              />
              <UButton 
                label="Megosztás" 
                size="sm" 
                variant="subtle"
                color="primary"
                block
                class="rounded-none"
              />
            </div>
          </template>
        </BuchlBlogPost>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Fenntarthatósági kezdeményezéseink 2024-ben",
    description: "Büszkeséggel mutatjuk be idei zöld programjainkat és környezetvédelmi kezdeményezéseinket, amelyekkel hozzájárulunk egy fenntarthatóbb jövő megteremtéséhez.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2560",
    slug: "/blog/fenntarthatosag-2024",
    category: "Fenntarthatóság",
    author: {
      name: "Kovács Nóra",
      avatar: "https://ui-avatars.com/api/?name=KN&background=002F5C&color=fff"
    },
    publishedAt: "2024-02-15",
    readingTime: "5 perc olvasás"
  },
  {
    id: 2,
    title: "Csatlakozz a BÜCHL csapatához!",
    description: "Új munkatársakat keresünk több pozícióba. Ismerj meg minket és csatlakozz egy dinamikusan fejlődő, nemzetközi háttérrel rendelkező vállalathoz.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2560",
    slug: "/blog/karrier-lehetosegek",
    category: "Karrier",
    author: {
      name: "Tóth Gábor",
      avatar: "https://ui-avatars.com/api/?name=TG&background=002F5C&color=fff"
    },
    publishedAt: "2024-02-10",
    readingTime: "3 perc olvasás"
  },
  {
    id: 3,
    title: "Innovatív megoldások az ipar számára",
    description: "Bemutatjuk legújabb technológiai fejlesztéseinket és piacvezető megoldásainkat, amelyek forradalmasítják az ipari folyamatokat és növelik a hatékonyságot.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2560",
    slug: "/blog/innovativ-megoldasok",
    category: "Innováció",
    author: {
      name: "Szabó Zsolt",
      avatar: "https://ui-avatars.com/api/?name=SZ&background=002F5C&color=fff"
    },
    publishedAt: "2024-02-05",
    readingTime: "7 perc olvasás"
  },
  {
    id: 4,
    title: "A BÜCHL csoport nemzetközi sikerei",
    description: "Összefoglaljuk az elmúlt év legnagyobb mérföldköveit és nemzetközi projektjeinket, amelyek meghatározták vállalatunk fejlődését és pozicionálták a BÜCHL márkát a globális piacon.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2560",
    slug: "/blog/nemzetkozi-sikerek",
    category: "Cégcsoport",
    author: {
      name: "Dr. Horváth Anna",
      avatar: "https://ui-avatars.com/api/?name=HA&background=002F5C&color=fff"
    },
    publishedAt: "2024-02-20",
    readingTime: "10 perc olvasás"
  },
  {
    id: 5,
    title: "Új hulladékkezelési technológiák",
    description: "A legmodernebb hulladékkezelési és újrahasznosítási technológiáink bemutatása, amelyek hatékonyabbá teszik az ipari hulladékok feldolgozását.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2560",
    slug: "/blog/hulladekkezeles-technologia",
    category: "Környezetvédelem",
    author: {
      name: "Nagy Péter",
      avatar: "https://ui-avatars.com/api/?name=NP&background=002F5C&color=fff"
    },
    publishedAt: "2024-01-28",
    readingTime: "6 perc olvasás"
  },
  {
    id: 6,
    title: "Oktatási programjaink és workshopok",
    description: "Folyamatos fejlődési lehetőségek munkavállalóink számára. Ismerd meg képzési programjainkat és szakmai fejlesztési lehetőségeinket.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2560",
    slug: "/blog/oktatas-kepzes",
    category: "Karrier",
    author: {
      name: "Kiss Mária",
      avatar: "https://ui-avatars.com/api/?name=KM&background=002F5C&color=fff"
    },
    publishedAt: "2024-01-15",
    readingTime: "4 perc olvasás"
  }
]

// Blog posts without images
const blogPostsNoImage = blogPosts.slice(0, 3).map(post => ({
  ...post,
  image: undefined
}))
</script>