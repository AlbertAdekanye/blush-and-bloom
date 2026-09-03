# Inspired by Anna

A modern, responsive fashion, beauty and lifestyle boutique website built for **Inspired by Anna**.

The website showcases curated nightwear, lingerie, women’s gymwear, beauty products, fragrances and girly accessories. Customers can explore products, filter by category, search the catalogue and place orders directly through WhatsApp.

## Live Website

[View Inspired by Anna](https://blush-and-bloom-pearl.vercel.app/)

## Features

* Responsive mobile-first design
* Luxury black, burgundy and pink branding
* Product catalogue
* Category-based product filtering
* Full-screen product search
* Direct WhatsApp ordering
* Pre-filled WhatsApp order messages
* Floating WhatsApp contact button
* Product category showcase
* About section
* Social-media and contact links
* Open Graph social-sharing image
* Custom favicon
* SEO metadata
* Accessible navigation and controls

## Product Categories

* Nightwear
* Bras and panties
* Women’s gymwear
* Beauty products
* Perfume and perfume oils
* Hair accessories
* Keyholders and girly accessories

## Built With

* React
* TypeScript
* Tailwind CSS
* Vite
* Lucide React
* Vercel

## Project Structure

```text
src/
├── assets/
│   └── images/
├── components/
│   ├── home/
│   │   ├── About.tsx
│   │   ├── Categories.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Hero.tsx
│   │   └── WhatsAppCTA.tsx
│   ├── layout/
│   │   ├── AnnouncementBar.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   └── products/
│       ├── ProductCard.tsx
│       └── SearchOverlay.tsx
├── data/
│   └── products.ts
├── types/
│   └── product.ts
├── App.tsx
├── index.css
└── main.tsx

public/
├── favicon.svg
└── og-image.png
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/AlbertAdekanye/inspired-by-anna
```

Move into the project directory:

```bash
cd blush-and-bloom
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Updating the WhatsApp Number

The temporary WhatsApp number appears in:

```text
src/components/home/Hero.tsx
src/components/home/WhatsAppCTA.tsx
src/components/layout/FloatingWhatsApp.tsx
src/components/layout/Footer.tsx
src/components/products/ProductCard.tsx
```


with the business WhatsApp number in international format without spaces or the `+` symbol.

For example:

```text
2348012345678
```

## Updating Products

Product information is stored in:

```text
src/data/products.ts
```

Each product follows this structure:

```ts
{
  id: 1,
  name: "Luxury Pink Satin Pyjama",
  category: "Nightwear",
  price: 18500,
  image: "/images/product-name.jpg",
  isNew: true,
}
```

Update the product name, category, price and image as required.

## Using Local Product Images

Create this folder:

```text
public/images/products/
```

Add the client’s product images and reference them like this:

```ts
image: "/images/products/pink-satin-pyjama.jpg"
```

Local images are recommended for the final website because external image links may be changed or removed.

## Updating Contact Details

The current brand details are:

* Instagram: `@inspiredbyanna.boutique`
* Facebook: `Inspired by Anna`
* Email: `inspiredbyanna.boutique@gmail.com`

Contact and social links can be updated inside:

```text
src/components/layout/Footer.tsx
```

## Open Graph Image

The social-sharing image is stored at:

```text
public/og-image.png
```

Its public URL is:

```text
https://blush-and-bloom-pearl.vercel.app/og-image.png
```

Open Graph metadata is configured inside `index.html`.

## Deployment

The website is deployed on Vercel.

To deploy your own version:

1. Push the project to GitHub.
2. Sign in to Vercel.
3. Import the GitHub repository.
4. Keep the default Vite build settings.
5. Click **Deploy**.

Vercel will automatically redeploy the website whenever new changes are pushed to the connected repository.

## Brand Message

> Effortless style. Everyday luxury. Inspired by you.

## Author

Designed and developed by **CodeWithKanye**.

## License

This project was created for Inspired by Anna. The brand name, visual identity, product information and business assets belong to their respective owner.
