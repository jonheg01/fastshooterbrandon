import type { CategoryKey } from "./site";

/**
 * Phase 1 product catalogue.
 *
 * Field names mirror the future `products` table exactly, so moving this file
 * into Postgres is a straight insert with no shape change:
 *   slug, name, brand, description, specs, images, outbound_url,
 *   affiliate_code, price, inventory_count, is_sellable, category, source_url
 *
 * Every spec and price below is taken from the manufacturer's own product page.
 * Nothing is invented. Anything unconfirmed is marked with a `verify` note and
 * is not rendered as fact on the site.
 *
 * IMAGES: manufacturer image URLs are recorded in `images` for reference but are
 * NOT rendered in Phase 1. Hotlinking another company's product photography is a
 * rights question that has not been answered yet. Cards render typographically
 * until Brandon has his own photos or written permission / press assets.
 */

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: CategoryKey[];
  /** 2 to 3 sentences, Brandon's voice, specifics from the manufacturer page. */
  description: string;
  /** Short factual chips. Every value appears on the manufacturer page. */
  specs: string[];
  price: string | null;
  outbound_url: string;
  source_url: string;
  images: string[];
  affiliate_code: string | null;
  inventory_count: number | null;
  is_sellable: false;
  verify?: string;
};

export const products: Product[] = [
  /* ---------------------------------------------------------------- RIFLE */
  {
    slug: "vortex-razor-hd-gen-ii-e-1-6x24",
    name: "Razor HD Gen II-E 1-6x24",
    brand: "Vortex Optics",
    category: ["rifle"],
    description:
      "One power for the close targets, six power when the stage stretches out. Vortex lists the Gen II-E as nearly a quarter pound lighter than the original Razor HD Gen II 1-6x24, on a 30mm tube, and they build it for competitive shooters and MIL and LE professionals. I run the VMR-2 MRAD reticle.",
    specs: ["1-6x24", "30mm tube", "VMR-2 MRAD reticle", "VIP lifetime warranty"],
    price: "$2,399.99 MSRP",
    outbound_url:
      "https://vortexoptics.com/razor-hd-gen-2-e-1-6x24-riflescope+reticle-VMR-2~MRAD",
    source_url:
      "https://vortexoptics.com/razor-hd-gen-2-e-1-6x24-riflescope+reticle-VMR-2~MRAD",
    images: [
      "https://vortexoptics.com/media/catalog/product/v/t/vtx_rfl_rzr-g2_s_1-6x24_cap_fr_w_1.jpeg",
    ],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
    verify:
      "Vortex's product page does not publish the full spec table (eye relief, weight, focal plane, illumination). Only what is printed on their page is shown here.",
  },
  {
    slug: "vortex-sport-cantilever-30mm-mount",
    name: "Sport Cantilever 30mm Mount",
    brand: "Vortex Optics",
    category: ["rifle"],
    description:
      "Two inch cantilever offset puts the scope where my head already is, so eye relief lands the same way every time I mount up. 6061 aluminum, 5.39 ounces, 1.50 inch center height, and Vortex laser engraves the torque specs on the mount: 15 to 18 inch pounds on the caps, 30 on the base. It splits horizontally, so the scope drops in instead of sliding through.",
    specs: [
      "30mm rings",
      "2 inch offset",
      "1.50 inch center height",
      "5.39 oz",
      "6061 aluminum",
      "Torx T-25",
    ],
    price: "$124.99",
    outbound_url: "https://vortexoptics.com/sport-cantilever-mount-scm-30-150.html",
    source_url: "https://vortexoptics.com/sport-cantilever-mount-scm-30-150.html",
    images: [
      "https://vortexoptics.com/media/catalog/product/v/t/vtx_rac_sportcantilevermount_30mm_hero_w.jpg",
    ],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
  },
  {
    slug: "vortex-defender-xl-2-moa",
    name: "Defender-XL Micro Red Dot, 2 MOA, Black",
    brand: "Vortex Optics",
    category: ["rifle", "pistol"],
    description:
      "The window is the whole point. Vortex builds the Defender-XL around an oversized sight window for peripheral vision and faster follow-up shots, and they list it as a competition optic. I run the 2 MOA dot in black, and it carries the same VIP unlimited lifetime warranty as the rest of their line.",
    specs: ["2 MOA dot", "Black", "Competition optic", "VIP lifetime warranty"],
    price: "$599.99 MSRP",
    outbound_url:
      "https://vortexoptics.com/defender-xl+reticle-2~MOA~Dot+vx_optic_color-Black",
    source_url:
      "https://vortexoptics.com/defender-xl+reticle-2~MOA~Dot+vx_optic_color-Black",
    images: [
      "https://vortexoptics.com/media/catalog/product/v/t/vtx_rd_defenderxl_8moa_fr_w_1.jpg",
    ],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
    verify:
      "Window dimensions, battery type, mounting footprint, weight, and waterproof rating live in a downloadable PDF, not on the product page. Not claimed here.",
  },
  {
    slug: "vortex-pro-45-degree-offset-mount",
    name: "Pro 45 Degree Offset Accessory Picatinny Mount",
    brand: "Vortex Optics",
    category: ["rifle"],
    description:
      "Roll the gun 45 degrees and the dot is already there. Vortex puts it plainly: switch from long range to close range with no grip shift and no head shift. 6061 aluminum, and it ships with both the Micro T-2 plate and the DeltaPoint Pro plate plus the T-25 and T-15 wrenches.",
    specs: [
      "45 degree offset",
      "6061 aluminum",
      "Micro T-2 plate included",
      "DeltaPoint Pro plate included",
    ],
    price: "$74.99",
    outbound_url:
      "https://vortexoptics.com/pro-45-degree-offset-accessory-picatinny-mount.html",
    source_url:
      "https://vortexoptics.com/pro-45-degree-offset-accessory-picatinny-mount.html",
    images: [
      "https://vortexoptics.com/media/catalog/product/v/t/vtx_rac_45degreeoffsetmount_fl_w.jpg",
    ],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
  },
  {
    slug: "timney-ar-part-kit-49er",
    name: "AR Part Kit with the 49er Safety",
    brand: "Timney Triggers",
    category: ["rifle"],
    description:
      "The 49er safety runs a 49 degree throw instead of the standard 90, so there is less thumb travel on every make ready. Heat treated steel with a carbo nitride coating, a removable ambidextrous arm, and it still runs 90 degrees if that is what you want. The kit includes the two trigger pins, and Timney builds it in the USA.",
    specs: [
      "49 or 90 degree throw",
      "Heat treated steel",
      "Carbo nitride coating",
      "Removable ambi arm",
      "Includes 2 pins",
      "Made in USA",
    ],
    price: "$80.99",
    outbound_url: "https://timneytriggers.com/ar-part-kit/",
    source_url: "https://timneytriggers.com/ar-part-kit/",
    images: [
      "https://cdn11.bigcommerce.com/s-45f4e81vr4/images/stencil/original/products/1945/867/part_kit__27874.1589946402.png",
    ],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
  },
  {
    slug: "timney-ar-pro",
    name: "AR PRO Trigger",
    brand: "Timney Triggers",
    category: ["rifle"],
    description:
      "Two stage, two pounds total: eight ounces of first stage, then a 1.5 pound wall. Fully self contained and 100 percent drop in, so there is no gunsmithing, no fitting, and no anti walk pins required. It fits mil-spec AR-15 and AR-10 lowers, and Timney builds it in Phoenix.",
    specs: [
      "Two stage",
      "8 oz first stage",
      "1.5 lb second stage",
      "Drop in",
      "AR-15 and AR-10",
      "Lifetime warranty",
    ],
    price: "$299.99",
    outbound_url: "https://timneytriggers.com/ar-pro/",
    source_url: "https://timneytriggers.com/ar-pro/",
    images: [
      "https://cdn11.bigcommerce.com/s-45f4e81vr4/images/stencil/original/products/2002/1480/AR_PRO__06002.1715791929.png",
    ],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
  },
  {
    slug: "accu-tac-fd-5-bipod",
    name: "FD-5 Bipod",
    brand: "Accu-Tac",
    category: ["rifle"],
    description:
      "Three leg angles, nine height settings, and it cants on a quick detach lever. 6061 T6 aluminum with high strength steel hardware under a Type III mil-spec hard anodize, 22 ounces in the Picatinny version. Height runs from 6.25 inches with the legs back at 45 degrees to 10.75 inches at 90.",
    specs: [
      "Picatinny or Arca",
      "6061 T6 aluminum",
      "Type III hard anodize",
      "22 oz",
      "3 leg angles",
      "9 height settings",
      "Made in America",
    ],
    price: "$434.00",
    outbound_url: "https://accu-tac.com/products/fd-5-bipod",
    source_url: "https://accu-tac.com/products/fd-5-bipod",
    images: ["https://accu-tac.com/cdn/shop/files/FD5_PIC_SIDE.jpg"],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
  },
  {
    slug: "rise-armament-ra-701-compensator",
    name: "RA-701 Compensator",
    brand: "RISE Armament",
    category: ["rifle"],
    description:
      "RISE lists 67 percent recoil reduction on the RA-701, and the port design works on muzzle rise at the same time. 416 stainless steel, 2.5 inches long, 3 ounces, 0.875 inch outside diameter, with a recessed crown. The .22 caliber version is 1/2x28 for .223 and 5.56.",
    specs: [
      "416 stainless",
      "2.5 in long",
      "3 oz",
      "0.875 in OD",
      "1/2-28 (.22 cal)",
      "5/8-24 (.30 cal)",
      "Recessed crown",
    ],
    price: "$109.99",
    outbound_url: "https://risearmament.com/product/rise-armament-ra-701-ar-compensator/",
    source_url: "https://risearmament.com/product/rise-armament-ra-701-ar-compensator/",
    images: ["https://risearmament.com/wp-content/uploads/2024/06/RA-701-Blk-1.jpg"],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
  },

  /* --------------------------------------------------------------- PISTOL */
  {
    slug: "sy-guns-competition-pistol",
    name: "Custom Competition Pistol",
    brand: "SY Guns",
    category: ["pistol"],
    description:
      "SY Guns builds out of Henderson, Nevada, and they build to order: you pick the model, the grip, and the finish. Their order page lists the Open Gun at $8,000 and the Limited Optic Gun at $7,000, both optic ready. Orders start with a $2,500 deposit and the balance comes due at shipping.",
    specs: [
      "Open Gun $8,000",
      "Limited Optic Gun $7,000",
      "Optic ready",
      "$2,500 deposit",
      "Built to order",
    ],
    price: "From $7,000",
    outbound_url: "https://syguns.com/order",
    source_url: "https://syguns.com/order",
    images: [],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
    verify:
      "Which SY Guns model Brandon competes with is not confirmed. Card describes the builder's lineup, not his specific gun.",
  },
  {
    slug: "range-panda-apex-predator",
    name: "The A.P.E.X Predator Holster",
    brand: "Range Panda",
    category: ["pistol"],
    description:
      "Race holster, made to order and cut to a specific grip rather than built universal. The supplied hanger fits a 1.5 inch belt, the medium thigh pad is included, and the body is ambidextrous. Range Panda intends it to run with their Barrel Support System, and the grip insert is a separate purchase.",
    specs: [
      "Made to order",
      "1.5 in belt hanger",
      "Ambidextrous",
      "Medium thigh pad included",
      "Grip specific fitment",
    ],
    price: "$283.00",
    outbound_url: "https://rangepanda.com/products/the-a-p-e-x",
    source_url: "https://rangepanda.com/products/the-a-p-e-x",
    images: [],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
    verify:
      "Range Panda notes no refunds on lasered holsters and that the grip insert is sold separately. Color and laser options are chosen at order.",
  },
  {
    slug: "daa-idpa-racer-magazine-pouch",
    name: "IDPA Racer Magazine Pouch",
    brand: "Double-Alpha Academy",
    category: ["pistol"],
    description:
      "Thumb wheel retention set to current IDPA rules, and the tilt adjusts in small increments so the grip sits where your hand goes. It slides onto IDPA legal leather belts from 1.5 to 2.25 inches with click-in spacers for the width. The inserts swap for 2011, CZ, Glock, and M&P magazines.",
    specs: [
      "Thumb wheel retention",
      "IDPA legal",
      "1.5 to 2.25 in belts",
      "Swappable inserts",
      "Fully ambidextrous",
      "SKU 102559",
    ],
    price: "$33.00",
    outbound_url: "https://www.doublealpha.biz/us/daa-idpa-racer-magazine-pouch",
    source_url: "https://www.doublealpha.biz/us/daa-idpa-racer-magazine-pouch",
    images: [
      "https://www.doublealpha.biz/us/images/products/1590/5275/600x600/102559.jpg",
    ],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
    verify:
      "DAA notes these are built for IDPA legal leather belts, not for the velcro inner and outer belt systems used in IPSC.",
  },
  {
    slug: "daa-magnetic-magazine-pouch-combo",
    name: "Magnetic Magazine Pouch with Magnet Cover",
    brand: "Double-Alpha Academy",
    category: ["pistol"],
    description:
      "The magnetic pouch and the magnet cover, bought as one bundle. DAA prices the pouch at $37.95 and the cover at $11.95 on their own, and $47.40 for the pair.",
    specs: ["Bundle of 2", "Pouch $37.95 alone", "Cover $11.95 alone"],
    price: "$47.40",
    outbound_url: "https://www.doublealpha.biz/us/combo-magnetic-magazine-pouch-and-cover",
    source_url: "https://www.doublealpha.biz/us/combo-magnetic-magazine-pouch-and-cover",
    images: [
      "https://www.doublealpha.biz/us/images/products/1897/2402/600x600/combo-magnetic-magazine-pouch-and-cover.jpg",
    ],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
  },
  {
    slug: "daa-ratchet-belt",
    name: "Ratchet Belt",
    brand: "Double-Alpha Academy",
    category: ["pistol"],
    description:
      "The ratchet buckle lets me crank the belt down before a stage and back it off between them, with 1 to 10 cm of adjustment in the mechanism. Rigid outer belt at 39mm wide and 8mm thick, and the matched DAA inner belt comes with it, including a soft section that sits under the buckle. Sizes run 70 to 125 cm in black, blue, red, or silver.",
    specs: [
      "39mm wide",
      "8mm thick",
      "1 to 10 cm ratchet range",
      "Inner belt included",
      "Sizes 70 to 125 cm",
    ],
    price: "$86.95",
    outbound_url: "https://www.doublealpha.biz/us/daa-ratchet-belt",
    source_url: "https://www.doublealpha.biz/us/daa-ratchet-belt",
    images: [
      "https://www.doublealpha.biz/us/images/products/2293/4975/600x600/daa-ratchet-belt.jpg",
    ],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
  },
  {
    slug: "perfect-zero-premium-magazines",
    name: "Premium Magazines",
    brand: "Perfect Zero",
    category: ["pistol"],
    description:
      "Perfect Zero builds these in 9mm and .40 S&W across 120, 126, 140, and 170mm lengths, most of them on an Alphalock basepad. Stainless tubes, with listed capacities from 10 rounds in the restricted 126mm up to 29 rounds in the 170mm 9mm. Their lineup prices from $94.99 to $104.99.",
    specs: [
      "9mm and .40 S&W",
      "120 / 126 / 140 / 170mm",
      "Alphalock basepad",
      "Stainless",
      "$94.99 to $104.99",
    ],
    price: "From $94.99",
    outbound_url: "https://perfectzero.co/magazines/premium-magazines",
    source_url: "https://perfectzero.co/magazines/premium-magazines",
    images: [],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
    verify:
      "Which exact length and capacity Brandon runs is not confirmed. Card links to the full lineup.",
  },

  /* ------------------------------------------------------------------ PCC */
  {
    slug: "taylor-freelance-goliath-20-glock",
    name: "Goliath +20 Basepad for Glock",
    brand: "Taylor Freelance",
    category: ["pcc"],
    description:
      "Taylor Freelance lists the Goliath +20 as taking a Glock magazine to 51 plus 1 in a pistol caliber carbine. Aluminum body with a quick release base, so it comes apart for cleaning without a fight. Available in shiny, red, blue, or black.",
    specs: ["+20 rounds", "51 plus 1 total", "Aluminum", "Quick release base", "4 colors"],
    price: "$89.99",
    outbound_url: "https://taylorfreelancestore.com/goliath/",
    source_url: "https://taylorfreelancestore.com/goliath/",
    images: [],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
  },
  {
    slug: "taylor-freelance-goliath-xl-30",
    name: "Goliath XL +30 Basepad",
    brand: "Taylor Freelance",
    category: ["pcc"],
    description:
      "The bigger brother. Taylor Freelance built the Goliath XL for outlaw matches that run 40, 50, and 60 shot courses of fire, where reloading is the whole problem. Aluminum, same color options, $119.99.",
    specs: ["+30 rounds", "Aluminum", "Outlaw match capacity", "4 colors"],
    price: "$119.99",
    outbound_url: "https://taylorfreelancestore.com/goliath/",
    source_url: "https://taylorfreelancestore.com/goliath/",
    images: [],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
  },
  {
    slug: "taylor-freelance-jp-basepads",
    name: "JP Magazine Basepads and Extensions",
    brand: "Taylor Freelance",
    category: ["pcc"],
    description:
      "Taylor Freelance makes the basepad and extension parts for JP magazines, out of Bellingham, Washington. Their whole catalogue runs on one idea, and they print it on the site: more ammo is always better.",
    specs: ["JP fitment", "Basepads and extensions", "Made in Bellingham, WA"],
    price: null,
    outbound_url: "https://taylorfreelancestore.com/search.php?search_query=jp&section=product",
    source_url: "https://taylorfreelancestore.com",
    images: [],
    affiliate_code: null,
    inventory_count: null,
    is_sellable: false,
    verify:
      "Taylor Freelance blocks automated reads of their search results, so the exact JP part numbers, prices, and capacity gains are not confirmed. This card links to their JP search. Replace with named products once Brandon confirms which he runs.",
  },
];

export function productsFor(category: CategoryKey): Product[] {
  return products.filter((p) => p.category.includes(category));
}
