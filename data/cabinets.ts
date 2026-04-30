export type CabinetType = 'base' | 'wall' | 'tall'
export type CabinetStyle = 'shaker' | 'raised-panel' | 'modern'
export type CabinetFinish = 'white' | 'gray' | 'navy' | 'espresso' | 'antique-white'

export interface Cabinet {
  id: string
  sku: string
  name: string
  type: CabinetType
  style: CabinetStyle
  finish: CabinetFinish
  finishLabel: string
  width: number
  height: number
  depth: number
  description: string
  image: string
  features: string[]
}

const shakerWhiteImage = '/Categories/Framed Kitchen Cabinets.png'
const shakerGrayImage = '/Categories/Framed Kitchen Cabinets.png'
const shakerNavyImage = '/Categories/Framed Kitchen Cabinets.png'
const modernWhiteImage = '/Categories/Flat-Door Kitchen Cabinets.jpg'
const espressoImage = '/Categories/Framed Kitchen Cabinets.png'

export const cabinets: Cabinet[] = [

  // ── SHAKER WHITE — BASE ──────────────────────────────────────────────────
  {
    id: 'sw-b09', sku: 'SW-B09', name: 'Shaker White Single Door Base 9"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 9, height: 34.5, depth: 24,
    description: 'Compact single-door base cabinet with full-overlay shaker door and adjustable shelf.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', 'Adjustable shelf', 'Dovetail drawer box'],
  },
  {
    id: 'sw-b12', sku: 'SW-B12', name: 'Shaker White Single Door Base 12"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 12, height: 34.5, depth: 24,
    description: 'Single-door base cabinet with adjustable shelf and soft-close concealed hinges.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', 'Adjustable shelf', 'Dovetail drawer box'],
  },
  {
    id: 'sw-b15', sku: 'SW-B15', name: 'Shaker White Single Door Base 15"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 15, height: 34.5, depth: 24,
    description: 'Single-door base cabinet ideal for narrow spaces, with adjustable interior shelf.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', 'Adjustable shelf', 'Dovetail drawer box'],
  },
  {
    id: 'sw-b18', sku: 'SW-B18', name: 'Shaker White Single Door Base 18"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 18, height: 34.5, depth: 24,
    description: 'Single-door base with a generous interior cavity and full-extension drawer.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', 'Adjustable shelf', 'Full-extension drawer'],
  },
  {
    id: 'sw-b21', sku: 'SW-B21', name: 'Shaker White Single Door Base 21"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 21, height: 34.5, depth: 24,
    description: 'Single-door base cabinet with full-extension drawer and soft-close hinges.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', 'Adjustable shelf', 'Full-extension drawer'],
  },
  {
    id: 'sw-b24', sku: 'SW-B24', name: 'Shaker White Single Door Base 24"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 24, height: 34.5, depth: 24,
    description: 'Versatile single-door base with drawer and adjustable shelf — the kitchen workhorse.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', 'Adjustable shelf', 'Full-extension drawer'],
  },
  {
    id: 'sw-b30', sku: 'SW-B30', name: 'Shaker White Double Door Base 30"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 30, height: 34.5, depth: 24,
    description: 'Double-door base cabinet with adjustable shelf and concealed soft-close hinges.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves', 'Full-extension drawer'],
  },
  {
    id: 'sw-b33', sku: 'SW-B33', name: 'Shaker White Double Door Base 33"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 33, height: 34.5, depth: 24,
    description: 'Spacious double-door base with two adjustable shelves and top false drawer.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves', 'Full-extension drawer'],
  },
  {
    id: 'sw-b36', sku: 'SW-B36', name: 'Shaker White Double Door Base 36"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 36, height: 34.5, depth: 24,
    description: 'Large double-door base — ideal for below cooktops or as a main base run anchor.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves', 'Full-extension drawer'],
  },
  {
    id: 'sw-db15', sku: 'SW-DB15', name: 'Shaker White 3-Drawer Base 15"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 15, height: 34.5, depth: 24,
    description: 'Three-drawer base cabinet for organized utensil and cutlery storage.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close drawer glides', 'Dovetail drawer boxes', '3 full-extension drawers'],
  },
  {
    id: 'sw-db18', sku: 'SW-DB18', name: 'Shaker White 3-Drawer Base 18"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 18, height: 34.5, depth: 24,
    description: 'Three-drawer base perfect for pots, utensils, and kitchen essentials.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close drawer glides', 'Dovetail drawer boxes', '3 full-extension drawers'],
  },
  {
    id: 'sw-db24', sku: 'SW-DB24', name: 'Shaker White 3-Drawer Base 24"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 24, height: 34.5, depth: 24,
    description: 'Wide three-drawer base — the most functional cabinet in any kitchen layout.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close drawer glides', 'Dovetail drawer boxes', '3 full-extension drawers'],
  },
  {
    id: 'sw-sb30', sku: 'SW-SB30', name: 'Shaker White Sink Base 30"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 30, height: 34.5, depth: 24,
    description: 'Open interior sink base cabinet with false drawer fronts and double doors.',
    image: shakerWhiteImage,
    features: ['Open interior for plumbing', 'False drawer fronts', 'Soft-close hinges', 'Moisture-resistant bottom'],
  },
  {
    id: 'sw-sb36', sku: 'SW-SB36', name: 'Shaker White Sink Base 36"',
    type: 'base', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 36, height: 34.5, depth: 24,
    description: 'Large sink base for apron-front or undermount sinks up to 33" wide.',
    image: shakerWhiteImage,
    features: ['Open interior for plumbing', 'False drawer fronts', 'Soft-close hinges', 'Moisture-resistant bottom'],
  },

  // ── SHAKER WHITE — WALL ──────────────────────────────────────────────────
  {
    id: 'sw-w1230', sku: 'SW-W1230', name: 'Shaker White Single Door Wall 12" × 30"',
    type: 'wall', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 12, height: 30, depth: 12,
    description: 'Narrow single-door wall cabinet — ideal for end-of-run or above a refrigerator.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves'],
  },
  {
    id: 'sw-w1530', sku: 'SW-W1530', name: 'Shaker White Single Door Wall 15" × 30"',
    type: 'wall', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 15, height: 30, depth: 12,
    description: 'Single-door wall cabinet with two adjustable shelves for pantry-style storage.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves'],
  },
  {
    id: 'sw-w1830', sku: 'SW-W1830', name: 'Shaker White Single Door Wall 18" × 30"',
    type: 'wall', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 18, height: 30, depth: 12,
    description: 'Standard single-door wall cabinet, great for dishes and everyday items.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves'],
  },
  {
    id: 'sw-w2430', sku: 'SW-W2430', name: 'Shaker White Double Door Wall 24" × 30"',
    type: 'wall', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 24, height: 30, depth: 12,
    description: 'Double-door wall cabinet with two adjustable shelves and soft-close hinges.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves'],
  },
  {
    id: 'sw-w3030', sku: 'SW-W3030', name: 'Shaker White Double Door Wall 30" × 30"',
    type: 'wall', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 30, height: 30, depth: 12,
    description: 'Wide double-door wall cabinet — a staple above countertop runs.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves'],
  },
  {
    id: 'sw-w3630', sku: 'SW-W3630', name: 'Shaker White Double Door Wall 36" × 30"',
    type: 'wall', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 36, height: 30, depth: 12,
    description: 'Large double-door wall cabinet for maximum upper storage.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves'],
  },
  {
    id: 'sw-w3036', sku: 'SW-W3036', name: 'Shaker White Double Door Wall 30" × 36"',
    type: 'wall', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 30, height: 36, depth: 12,
    description: 'Taller wall cabinet for 9-ft ceiling kitchens — maximizes vertical storage.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '3 adjustable shelves'],
  },
  {
    id: 'sw-w3636', sku: 'SW-W3636', name: 'Shaker White Double Door Wall 36" × 36"',
    type: 'wall', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 36, height: 36, depth: 12,
    description: 'Extra-tall wide wall cabinet for high-ceiling kitchens with maximum storage needs.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '3 adjustable shelves'],
  },

  // ── SHAKER WHITE — TALL ──────────────────────────────────────────────────
  {
    id: 'sw-t1884', sku: 'SW-T1884', name: 'Shaker White Pantry Cabinet 18" × 84"',
    type: 'tall', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 18, height: 84, depth: 24,
    description: 'Tall pantry cabinet with four adjustable shelves — perfect for canned goods and dry storage.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '4 adjustable shelves', 'Full-overlay doors'],
  },
  {
    id: 'sw-t2484', sku: 'SW-T2484', name: 'Shaker White Pantry Cabinet 24" × 84"',
    type: 'tall', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 24, height: 84, depth: 24,
    description: 'Wide pantry cabinet with ample interior — great as a broom cabinet or food pantry.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '4 adjustable shelves', 'Full-overlay doors'],
  },
  {
    id: 'sw-t3384', sku: 'SW-T3384', name: 'Shaker White Pantry Cabinet 33" × 84"',
    type: 'tall', style: 'shaker', finish: 'white', finishLabel: 'White',
    width: 33, height: 84, depth: 24,
    description: 'Large double-door pantry cabinet — a statement piece with generous storage.',
    image: shakerWhiteImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '4 adjustable shelves', 'Full-overlay doors'],
  },

  // ── SHAKER GRAY — BASE & WALL ────────────────────────────────────────────
  {
    id: 'sg-b24', sku: 'SG-B24', name: 'Shaker Gray Single Door Base 24"',
    type: 'base', style: 'shaker', finish: 'gray', finishLabel: 'Gray',
    width: 24, height: 34.5, depth: 24,
    description: 'Single-door base in a warm gray finish — ideal for two-tone kitchen designs.',
    image: shakerGrayImage,
    features: ['Solid wood face frame', 'Soft-close hinges', 'Adjustable shelf', 'Full-extension drawer'],
  },
  {
    id: 'sg-b30', sku: 'SG-B30', name: 'Shaker Gray Double Door Base 30"',
    type: 'base', style: 'shaker', finish: 'gray', finishLabel: 'Gray',
    width: 30, height: 34.5, depth: 24,
    description: 'Double-door base in gray shaker — a popular choice for lower cabinets in two-tone kitchens.',
    image: shakerGrayImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves', 'Full-extension drawer'],
  },
  {
    id: 'sg-b36', sku: 'SG-B36', name: 'Shaker Gray Double Door Base 36"',
    type: 'base', style: 'shaker', finish: 'gray', finishLabel: 'Gray',
    width: 36, height: 34.5, depth: 24,
    description: 'Wide gray base cabinet — beautiful paired with white uppers and quartz countertops.',
    image: shakerGrayImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves', 'Full-extension drawer'],
  },
  {
    id: 'sg-db18', sku: 'SG-DB18', name: 'Shaker Gray 3-Drawer Base 18"',
    type: 'base', style: 'shaker', finish: 'gray', finishLabel: 'Gray',
    width: 18, height: 34.5, depth: 24,
    description: 'Three-drawer base in gray shaker — functional and stylish accent to white upper cabinets.',
    image: shakerGrayImage,
    features: ['Solid wood face frame', 'Soft-close drawer glides', 'Dovetail drawer boxes', '3 full-extension drawers'],
  },
  {
    id: 'sg-sb36', sku: 'SG-SB36', name: 'Shaker Gray Sink Base 36"',
    type: 'base', style: 'shaker', finish: 'gray', finishLabel: 'Gray',
    width: 36, height: 34.5, depth: 24,
    description: 'Sink base in gray shaker finish for an island or perimeter sink installation.',
    image: shakerGrayImage,
    features: ['Open interior for plumbing', 'False drawer fronts', 'Soft-close hinges', 'Moisture-resistant bottom'],
  },
  {
    id: 'sg-w3030', sku: 'SG-W3030', name: 'Shaker Gray Double Door Wall 30" × 30"',
    type: 'wall', style: 'shaker', finish: 'gray', finishLabel: 'Gray',
    width: 30, height: 30, depth: 12,
    description: 'Gray wall cabinet — pairs beautifully with white or natural wood base cabinets.',
    image: shakerGrayImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves'],
  },
  {
    id: 'sg-t2484', sku: 'SG-T2484', name: 'Shaker Gray Pantry Cabinet 24" × 84"',
    type: 'tall', style: 'shaker', finish: 'gray', finishLabel: 'Gray',
    width: 24, height: 84, depth: 24,
    description: 'Tall pantry in gray shaker — a bold anchor piece for two-tone kitchen designs.',
    image: shakerGrayImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '4 adjustable shelves', 'Full-overlay doors'],
  },

  // ── SHAKER NAVY — KEY SIZES ──────────────────────────────────────────────
  {
    id: 'sn-b36', sku: 'SN-B36', name: 'Shaker Navy Double Door Base 36"',
    type: 'base', style: 'shaker', finish: 'navy', finishLabel: 'Navy',
    width: 36, height: 34.5, depth: 24,
    description: 'Bold navy base cabinet — a dramatic focal point paired with brass hardware and white quartz.',
    image: shakerNavyImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves', 'Full-extension drawer'],
  },
  {
    id: 'sn-b30', sku: 'SN-B30', name: 'Shaker Navy Double Door Base 30"',
    type: 'base', style: 'shaker', finish: 'navy', finishLabel: 'Navy',
    width: 30, height: 34.5, depth: 24,
    description: 'Navy shaker base — rich color that works as island or perimeter lower cabinets.',
    image: shakerNavyImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '2 adjustable shelves', 'Full-extension drawer'],
  },
  {
    id: 'sn-db24', sku: 'SN-DB24', name: 'Shaker Navy 3-Drawer Base 24"',
    type: 'base', style: 'shaker', finish: 'navy', finishLabel: 'Navy',
    width: 24, height: 34.5, depth: 24,
    description: 'Three-drawer navy base — adds color and character to the most-used section of your kitchen.',
    image: shakerNavyImage,
    features: ['Solid wood face frame', 'Soft-close drawer glides', 'Dovetail drawer boxes', '3 full-extension drawers'],
  },
  {
    id: 'sn-sb36', sku: 'SN-SB36', name: 'Shaker Navy Sink Base 36"',
    type: 'base', style: 'shaker', finish: 'navy', finishLabel: 'Navy',
    width: 36, height: 34.5, depth: 24,
    description: 'Navy sink base — makes a bold statement for a kitchen island or farmhouse sink installation.',
    image: shakerNavyImage,
    features: ['Open interior for plumbing', 'False drawer fronts', 'Soft-close hinges', 'Moisture-resistant bottom'],
  },
  {
    id: 'sn-t2484', sku: 'SN-T2484', name: 'Shaker Navy Pantry Cabinet 24" × 84"',
    type: 'tall', style: 'shaker', finish: 'navy', finishLabel: 'Navy',
    width: 24, height: 84, depth: 24,
    description: 'Tall navy pantry — a striking full-height accent piece that anchors the kitchen.',
    image: shakerNavyImage,
    features: ['Solid wood face frame', 'Soft-close hinges', '4 adjustable shelves', 'Full-overlay doors'],
  },

  // ── MODERN / FLAT — WHITE ────────────────────────────────────────────────
  {
    id: 'mw-b30', sku: 'MW-B30', name: 'Modern Flat White Double Door Base 30"',
    type: 'base', style: 'modern', finish: 'white', finishLabel: 'White',
    width: 30, height: 34.5, depth: 24,
    description: 'Sleek flat-panel base cabinet with no visible frame — true slab-door minimalism.',
    image: modernWhiteImage,
    features: ['Frameless construction', 'Soft-close hinges', '2 adjustable shelves', 'Full-extension drawer'],
  },
  {
    id: 'mw-b36', sku: 'MW-B36', name: 'Modern Flat White Double Door Base 36"',
    type: 'base', style: 'modern', finish: 'white', finishLabel: 'White',
    width: 36, height: 34.5, depth: 24,
    description: 'Wide frameless base cabinet for a seamless modern kitchen aesthetic.',
    image: modernWhiteImage,
    features: ['Frameless construction', 'Soft-close hinges', '2 adjustable shelves', 'Full-extension drawer'],
  },
  {
    id: 'mw-db24', sku: 'MW-DB24', name: 'Modern Flat White 3-Drawer Base 24"',
    type: 'base', style: 'modern', finish: 'white', finishLabel: 'White',
    width: 24, height: 34.5, depth: 24,
    description: 'Three-drawer slab-front base cabinet — clean, handle-free design for modern kitchens.',
    image: modernWhiteImage,
    features: ['Frameless construction', 'Soft-close drawer glides', 'Dovetail drawer boxes', '3 full-extension drawers'],
  },
  {
    id: 'mw-w3030', sku: 'MW-W3030', name: 'Modern Flat White Double Door Wall 30" × 30"',
    type: 'wall', style: 'modern', finish: 'white', finishLabel: 'White',
    width: 30, height: 30, depth: 12,
    description: 'Flat-panel wall cabinet with invisible hinge system — seamless modern upper storage.',
    image: modernWhiteImage,
    features: ['Frameless construction', 'Soft-close hinges', '2 adjustable shelves'],
  },
  {
    id: 'mw-w3630', sku: 'MW-W3630', name: 'Modern Flat White Double Door Wall 36" × 30"',
    type: 'wall', style: 'modern', finish: 'white', finishLabel: 'White',
    width: 36, height: 30, depth: 12,
    description: 'Wide flat-panel wall cabinet — the backbone of any contemporary kitchen upper run.',
    image: modernWhiteImage,
    features: ['Frameless construction', 'Soft-close hinges', '2 adjustable shelves'],
  },
  {
    id: 'mw-t2484', sku: 'MW-T2484', name: 'Modern Flat White Pantry Cabinet 24" × 84"',
    type: 'tall', style: 'modern', finish: 'white', finishLabel: 'White',
    width: 24, height: 84, depth: 24,
    description: 'Full-height flat-panel pantry cabinet — a striking vertical element in modern kitchens.',
    image: modernWhiteImage,
    features: ['Frameless construction', 'Soft-close hinges', '4 adjustable shelves', 'Full-overlay doors'],
  },

  // ── ESPRESSO RAISED PANEL ────────────────────────────────────────────────
  {
    id: 'er-b30', sku: 'ER-B30', name: 'Espresso Raised Panel Double Door Base 30"',
    type: 'base', style: 'raised-panel', finish: 'espresso', finishLabel: 'Espresso',
    width: 30, height: 34.5, depth: 24,
    description: 'Rich espresso raised-panel base cabinet — classic craftsmanship with dark, warm tones.',
    image: espressoImage,
    features: ['Solid wood face frame', 'Raised center panel', 'Soft-close hinges', '2 adjustable shelves'],
  },
  {
    id: 'er-b36', sku: 'ER-B36', name: 'Espresso Raised Panel Double Door Base 36"',
    type: 'base', style: 'raised-panel', finish: 'espresso', finishLabel: 'Espresso',
    width: 36, height: 34.5, depth: 24,
    description: 'Wide espresso raised-panel base — a warm, traditional look with exceptional depth.',
    image: espressoImage,
    features: ['Solid wood face frame', 'Raised center panel', 'Soft-close hinges', '2 adjustable shelves'],
  },
  {
    id: 'er-db18', sku: 'ER-DB18', name: 'Espresso Raised Panel 3-Drawer Base 18"',
    type: 'base', style: 'raised-panel', finish: 'espresso', finishLabel: 'Espresso',
    width: 18, height: 34.5, depth: 24,
    description: 'Three-drawer espresso base with raised panel fronts — functional and rich in character.',
    image: espressoImage,
    features: ['Solid wood face frame', 'Raised center panel', 'Soft-close drawer glides', '3 full-extension drawers'],
  },
  {
    id: 'er-w3030', sku: 'ER-W3030', name: 'Espresso Raised Panel Double Door Wall 30" × 30"',
    type: 'wall', style: 'raised-panel', finish: 'espresso', finishLabel: 'Espresso',
    width: 30, height: 30, depth: 12,
    description: 'Raised-panel wall cabinet in espresso — timeless traditional styling for classic kitchens.',
    image: espressoImage,
    features: ['Solid wood face frame', 'Raised center panel', 'Soft-close hinges', '2 adjustable shelves'],
  },
  {
    id: 'er-t2484', sku: 'ER-T2484', name: 'Espresso Raised Panel Pantry Cabinet 24" × 84"',
    type: 'tall', style: 'raised-panel', finish: 'espresso', finishLabel: 'Espresso',
    width: 24, height: 84, depth: 24,
    description: 'Tall espresso pantry with raised-panel doors — dramatic and warm, a kitchen centerpiece.',
    image: espressoImage,
    features: ['Solid wood face frame', 'Raised center panel', 'Soft-close hinges', '4 adjustable shelves'],
  },
]

export const cabinetTypeLabels: Record<CabinetType, string> = {
  base: 'Base Cabinets',
  wall: 'Wall Cabinets',
  tall: 'Tall / Pantry Cabinets',
}

export const cabinetStyleLabels: Record<CabinetStyle, string> = {
  shaker: 'Shaker',
  'raised-panel': 'Raised Panel',
  modern: 'Modern / Flat',
}

export const cabinetFinishLabels: Record<CabinetFinish, string> = {
  white: 'White',
  gray: 'Gray',
  navy: 'Navy',
  espresso: 'Espresso',
  'antique-white': 'Antique White',
}
