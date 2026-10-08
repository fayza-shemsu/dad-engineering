export const machineGallery = [
  { filename: '20261002_082506.webp', caption: 'Cholet lathe', category: 'Lathes & Turning' },
  { filename: '20261002_082514.webp', caption: 'Heavy-duty lathe', category: 'Lathes & Turning' },
  { filename: '20261002_082521.webp', caption: 'Universal milling machine', category: 'Milling' },
  { filename: '20261002_082526.webp', caption: 'Vertical slotting machine', category: 'Drilling & Slotting' },
  { filename: '20261002_082531.webp', caption: 'Raboma radial drilling machine', category: 'Drilling & Slotting' },
  { filename: '20261002_082536.webp', caption: 'Gear hobbing machine', category: 'Gear Machining' },
  { filename: '20261002_082543.webp', caption: 'Gear hobbing machine', category: 'Gear Machining' },
  { filename: '20261002_082602.webp', caption: 'Thread rolling machine', category: 'Rolling' },
  { filename: '20261002_082608.webp', caption: 'Muhr und Bender HIW 750 ironworker', category: 'Shearing & Punching' },
  { filename: '20261002_082643.webp', caption: 'Heavy-duty CNC lathe', category: 'Lathes & Turning' },
  { filename: '20261002_082648.webp', caption: 'Pipe and profile bending machine', category: 'Presses & Bending' },
  { filename: '20261002_082654.webp', caption: 'Beyeler CNC press brake', category: 'Presses & Bending' },
  { filename: '20261002_082703.webp', caption: 'GWF hydraulic shear', category: 'Shearing & Punching' },
  { filename: '20261002_082707.webp', caption: 'Plate rolling machine', category: 'Rolling' },
  { filename: '20261002_082712.webp', caption: 'Heavy-duty plate rolling machine', category: 'Rolling' },
  { filename: '20261002_082730.webp', caption: 'Boldrini hydraulic press', category: 'Presses & Bending' },
  { filename: '20261002_082736.webp', caption: 'Boldrini flanging machine', category: 'Presses & Bending' },
  { filename: '20261002_082801.webp', caption: 'Heavy-duty vertical lathe', category: 'Lathes & Turning' }
];

export const facilityGallery = [
  { filename: '20261002_082827.webp', caption: 'Large workshop hall overview', category: 'facility' },
  { filename: '20261002_082836.webp', caption: 'Machining hall operations', category: 'facility' },
  { filename: '20261002_082847.webp', caption: 'Craftsmen operating the rolling machine', category: 'facility' },
  { filename: '20261002_082851.webp', caption: 'Craftsmen at the press brake', category: 'facility' },
  { filename: '20261002_082859.webp', caption: 'Craftsmen at the hydraulic shear', category: 'facility' },
  { filename: '20261002_082916.webp', caption: 'Boldrini press hall', category: 'facility' },
  { filename: '20261002_082939.webp', caption: 'General facility view', category: 'facility' },
  { filename: '20261002_083100.webp', caption: '100 Ton Mobile Crane', category: 'fleet' },
  { filename: '20261002_083121.webp', caption: 'Small Truck Crane', category: 'fleet' },
  { filename: '20261002_083143_0.webp', caption: 'Truck-Mounted Loader Crane', category: 'fleet' },
  { filename: '20261002_083219.webp', caption: 'FAUN Mobile Crane', category: 'fleet' },
  { filename: '20261002_083233.webp', caption: 'Fleet storage area', category: 'fleet' }
];

// Re-export combined if needed by legacy code, though components should use the new separated ones
export const imageManifest = [...machineGallery, ...facilityGallery];
