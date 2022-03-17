export interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Oribe Supershine Moisturizing Crème',
    price: 52.00,
    description: 'A luxe reinvention of leave-in conditioner, this supreme cream satisfies the thirstiest hair, calming frizz, elevating shine and restoring hair to supernatural softness. Especially loved by medium-to-thick and extra-long hair.',
    image: 'https://m.media-amazon.com/images/I/71bMb72j9fL._SY679_.jpg',
    rating: 5,
    url: 'https://www.amazon.com/ORIBE-Supershine-Moisturizing-Cr%C3%A8me-5-0/dp/B00203Q9B4/ref=sr_1_4?qid=1647320189&refinements=p_n_feature_eight_browse-bin%3A14552215011%2Cp_n_target_audience_browse-bin%3A405781011&rnid=405778011&s=beauty-intl-ship&sr=1-4'
  },
  {
    id: 2,
    name: 'Ligne St. Barth Coconut Oil - Coconut Oil Spf 0 25 ml',
    price: 32.62,
    description: 'The coconut oil of & ldquola Ligne de St. Barth & rdquo is used in the final phase of the tanning process.Coconut oil is also a luxurious bath oil that will give your skin a velvety look.',
    image: 'https://m.media-amazon.com/images/I/61PDJReYTIL._SX679_.jpg',
    rating: 1,
    url: 'https://www.amazon.com/Ligne-St-Barth-Coconut-Oil/dp/B00LSQOV3C/ref=sr_1_1?crid=2GXGRR0R1S6IU&keywords=Ligne+St.+Barth+Coconut+Oil+-+Coconut+Oil+Spf+0+25+ml&qid=1647335865&sprefix=ligne+st.+barth+coconut+oil+-+coconut+oil+spf+0+25+ml%2Caps%2C246&sr=8-1'
  },
  {
    id: 3,
    name: 'Tiziana Terenzi Kirke',
    price: 183.75,
    description: 'Like one of the famous enchanted potions of Goddess Circe, this extract enraptures whoever wears it, guiding them on mysterious paths to discover amazing marvels.A fruity, nectarous, sensual fragrance. Made in Italy.',
    image: 'https://m.media-amazon.com/images/I/71h8d9Dbj6L._SX679_.jpg',
    rating: 5,
    url: 'https://www.amazon.com/TIZIANA-TERENZ-Kirke-Extrait-Perfume/dp/B01HSF1I0A/ref=sr_1_1?crid=1V68N4AHEJ73D&keywords=tiziana+terenzi+perfume&qid=1647321520&sprefix=tizi%2Caps%2C258&sr=8-1'
  },
  {
    id: 4,
    name: 'Dior Addict Long-Wear Lip Tattoo ',
    price: 59.98,
    description: 'Christian Dior. Dior Addict Lip Tattoo Lipstick Natural / Rosewood 491.Holds 10 hours, comfortable formula and rendered "no transfer" no matter effect. ',
    image: 'https://m.media-amazon.com/images/I/51nNa+0v5LL._AC_SX679_.jpg',
    rating: 5,
    url: 'https://www.amazon.com/Dior-Addict-Long-Wear-Natural-Rosewood/dp/B0722CCQL3/ref=sr_1_1?crid=35DZFW0H3VFRO&keywords=dior+lip+tattoo&qid=1647321854&sprefix=dior+lip+%2Caps%2C403&sr=8-1'
  },
  {
    id: 5,
    name: 'Oribe Signature Shampoo',
    price: 46.00,
    description: 'Every morning should start with a little indulgence, such as this rich daily cleanser, custom-blended from the most exclusive ingredients to silken, detangle and protect. Prepare your hair for glamour.',
    image: 'https://m.media-amazon.com/images/I/51cdOBavrEL._SY679_.jpg',
    rating: 4.6,
    url: 'https://www.amazon.com/ORIBE-Signature-Shampoo-8-5-Fl/dp/B07XGTMQLF/ref=sr_1_18?qid=1647330142&refinements=p_n_feature_eight_browse-bin%3A14552215011%2Cp_n_feature_ten_browse-bin%3A15863143011&rnid=15863142011&s=beauty-intl-ship&sr=1-18&th=1'
  },
  {
    id: 6,
    name: '\n' +
      'Ligne St. Barth Avocado oil 25 ml Avocado Body and Hair Oil',
    price: 51.64,
    description: 'Combined with the action of the massage, Avocado Oil tones the skin and helps to refine the silhouette and perfect the line. Avocado oil also helps to preserve the tan and effectively prevents the formation of wrinkles and stretch marks. ',
    image: 'https://m.media-amazon.com/images/I/51S3GAeuDAL._SL1250_.jpg',
    rating: 1,
    url: 'https://www.amazon.com/Ligne-St-Barth-Avocado-Body/dp/B00MFWOCKU/ref=sr_1_1?crid=3GIG7D65X54U9&keywords=st+barth+oil&qid=1647331093&sprefix=st+barth+oil%2Caps%2C254&sr=8-1'
  },
  {
    id: 7,
    name: 'Tiziana Terenzi Tiziana Terenzi Cas',
    price: 265.00,
    image: 'https://m.media-amazon.com/images/I/711KCtPo7tL._SX522_.jpg',
    rating: 5,
    description:'\tNatural luxury fragrance.\tWoody Spicy',
    url: 'https://www.amazon.com/Tiziana-Terenzi-Cas-EDP-Women/dp/B07CW6RDLR/ref=sr_1_13?crid=2H9MH7VFGA8PV&keywords=tiziana+terenzi+cassiopea&qid=1647330820&sprefix=tiziana+terenzi+cass%2Caps%2C258&sr=8-13'
  },
  {
    id: 8,
    name: 'Backstage Eyeshadow Palette (Cool)',
    price: 76.30,
    description: 'Eyeshadow Palette. Finish type: Matte.',
    image: 'https://m.media-amazon.com/images/I/51AdTVpydOL.jpg',
    rating: 4.7,
    url: 'https://www.amazon.com/Dior-Backstage-Eyeshadow-Palette-Cool/dp/B07FJZYZRN/ref=sr_1_38?crid=TE86LKGFU2CS&keywords=dior&qid=1647330534&sprefix=di%2Caps%2C400&sr=8-38'
  },
  {
    id: 9,
    name: 'Oribe Shampoo for Moisture & Control ',
    price: 46.00,
    description: 'Tame your tresses. Curly, kinky, impossibly thick hair gets instant moisture gratification and even a bit of devolumization, leaving it smooth, sleek and completely under control.',
    image: 'https://m.media-amazon.com/images/I/61cyeQiv9YL._SX522_.jpg',
    rating: 4.6,
    url: 'https://www.amazon.com/ORIBE-Shampoo-Moisture-Control-8-5/dp/B07MFFDK7Z/ref=bmx_dp_f77t2mjn_23/132-3242912-7790458?pd_rd_w=4Xpf2&pf_rd_p=87af4f4c-0b6c-4122-8df1-bcb9f3d7f2c7&pf_rd_r=SR3NXR8Y6D3KZZNCWPY6&pd_rd_r=94499e8a-cb94-4208-8bf5-74a3bb6dacb3&pd_rd_wg=FmEYG&pd_rd_i=B07MFFDK7Z&psc=1'
  },
  {
    id: 10,
    name: 'Dior Dior addict lip maximizer high volume',
    price: 35.00,
    description: 'The signature lip plumping gloss from the house of Dior helps provide a plumping lip care for absolute comfort, shine and a volume-maximizing effect.',
    image: 'https://m.media-amazon.com/images/I/51zFsqejdZL._SY879_.jpg',
    rating: 4.2,
    url: 'https://www.amazon.com/Dior-Addict-Lip-Maximizer-Holo/dp/B07M6XR5WM/ref=bmx_dp_f77t2mjn_3/132-3242912-7790458?pd_rd_w=rOc1N&pf_rd_p=87af4f4c-0b6c-4122-8df1-bcb9f3d7f2c7&pf_rd_r=2Q37NVNA71XVGN9M0ZRK&pd_rd_r=916c126a-42da-4fa1-8a5f-88cfccfb24a6&pd_rd_wg=B5Zkk&pd_rd_i=B07M6XR5WM&psc=1'
  }
];
