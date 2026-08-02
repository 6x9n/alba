const productsData = [
  // --- قسم الأقفال والأنظمة الذكية ---
  {
    id: "locks-01",
    category: "locks",
    title: "كالون إلكتروني صيني",
    image: "assets/images/products/01-locks/Asset 23.png",
    description: "قفل إلكتروني متطور للغرف الفندقية يعمل بالبطاقات الممغنطة وتشفير RFID الأمني.",
    color: "فضي",
    size: "قياسي",
    code: "1007474"

  },
  {
    id: "locks-02",
    category: "locks",
    title: "كالون إلكتروني صيني",
    image: "assets/images/products/01-locks/Asset 24.png",
    description: "قفل إلكتروني متطور للغرف الفندقية يعمل بالبطاقات الممغنطة وتشفير RFID الأمني.",
    color: "ذهبي",
    size: "قياسي",
    code: "1007476"

  },
  // 0.2
  {
    id: "furn-chair-01",
    category: "furniture",
    subcategory: "chairs",
    title: "كرسي طعام",
    image: "assets/images/products/02-furniture/Asset 4.png",
    description: "كرسي طعام فندقي فاخر بقواعد معدنية ذهبية متقاطعة.",
    color: "بيج",
    size: "460*520*930 سم",
    code: "BTS.T6008"
  },
  {
    id: "furn-chair-02",
    category: "furniture",
    subcategory: "chairs",
    title: "كرسي طعام",
    image: "assets/images/products/02-furniture/Asset 3.png",
    description: "كرسي طعام مخملي أخضر بتصميم عصري وأرجل ذهبية متقاطعة.",
    color: "أخضر",
    size: "460*520*930 سم",
    code: "BTS.T6009"
  },
  {
    id: "furn-chair-03",
    category: "furniture",
    subcategory: "chairs",
    title: "كرسي طعام",
    image: "assets/images/products/02-furniture/Asset 2.png",
    description: "كرسي طعام مخملي أزرق كحلي بتطريز فاخر وقواعد ذهبية.",
    color: "أزرق",
    size: "460*520*930 سم",
    code: "BTS.T6010"
  },
  {
    id: "furn-chair-04",
    category: "furniture",
    subcategory: "chairs",
    title: "كرسي متعدد الاستخدام",
    image: "assets/images/products/02-furniture/Asset 9.png",
    description: "كرسي مريح بإنحناءات انسيابية وذراعين للأجنحة والاستراحات.",
    color: "أخضر",
    size: "قياسي",
    code: "BTS.T7070"
  },
  {
    id: "furn-chair-05",
    category: "furniture",
    subcategory: "chairs",
    title: "كرسي طعام",
    image: "assets/images/products/02-furniture/Asset 8.png",
    description: "كرسي طعام مخملي بإطار معدني ذهبي بارز من الخلف.",
    color: "أخضر",
    size: "900*560*470 سم",
    code: "BTS.T6004"
  },
  {
    id: "furn-chair-06",
    category: "furniture",
    subcategory: "chairs",
    title: "كرسي مكتب فاخر",
    image: "assets/images/products/02-furniture/Asset 7.png",
    description: "كرسي مكتب مخمل أسود بذراعين وقواعد ذهبية متينة.",
    color: "أسود",
    size: "800*500*500 سم",
    code: "BTS.T6012"
  },

  // ==========================================
  // 2. قسم الأثاث الفندقي - الكنب والصالونات (sofas)
  // ==========================================
  {
    id: "furn-sofa-01",
    category: "furniture",
    subcategory: "sofas",
    title: "كرسي صالة دائر",
    image: "assets/images/products/02-furniture/Asset 11.png",
    description: "كرسي صالة مفرد بتصميم جلدي دائر ومريح ولون برتقالي دافئ.",
    color: "برتقالي",
    size: "800*700*700 سم",
    code: "BTS.6060A"
  },
  {
    id: "furn-sofa-02",
    category: "furniture",
    subcategory: "sofas",
    title: "كنب ثنائي المقعد",
    image: "assets/images/products/02-furniture/Asset 10.png",
    description: "كنبة مخملية ثنائية باللون البرتقالي مخصصة للوبيات والأجنحة الفندقية.",
    color: "برتقالي",
    size: "1800*900*800 سم",
    code: "BTS.A01*2-LP9097-18"
  },

  // ==========================================
  // 3. قسم الأثاث الفندقي - الطاولات (tables)
  // ==========================================
  {
    id: "furn-table-01",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة خدمة فرعية مقوسة",
    image: "assets/images/products/02-furniture/Asset 5.png",
    description: "طاولة خدمة جانبية بأسطح رخامية سوداء وقواعد ذهبية مقوسة.",
    color: "أسود",
    size: "500*400*400 سم",
    code: "BTS.T6049"
  },
  {
    id: "furn-table-02",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة خدمة فرعية مقوسة",
    image: "assets/images/products/02-furniture/Asset 6.png",
    description: "طاولة خدمة جانبية بأسطح رخامية بيضاء وقواعد ذهبية مقوسة.",
    color: "أبيض",
    size: "500*400*400 سم",
    code: "BTS.T6048"
  },
  {
    id: "furn-table-03",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة خدمة",
    image: "assets/images/products/02-furniture/Asset 14.png",
    description: "طاولة وسط رخام أبيض مقوسة الزوايا للصالات واللوبي.",
    color: "أبيض",
    size: "750*800*1400 سم",
    code: "BTS.T6052"
  },
  {
    id: "furn-table-04",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة خدمة سنتر",
    image: "assets/images/products/02-furniture/Asset 12.png",
    description: "طاولة وسط رخام أسود مستطيلة بقواعد معدنية ذهبية متقاطعة.",
    color: "أسود",
    size: "750*800*1400 سم",
    code: "BTS.T6055"
  },
  {
    id: "furn-table-05",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة خدمة رئيسية",
    image: "assets/images/products/02-furniture/Asset 16.png",
    description: "طاولة سنتر بيضاوية بسطح أسود وقواعد رأسية مجوفة.",
    color: "أسود",
    size: "500*600*1200 سم",
    code: "BTS.T6060"
  },
  {
    id: "furn-table-06",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة مكتب بدرج",
    image: "assets/images/products/02-furniture/Asset 20.png",
    description: "طاولة مكتب فندقية بسطح أبيض ودُرجين وتصميم مدرن.",
    color: "أبيض",
    size: "750*600*1000 سم",
    code: "BTS.T6044"
  },
  {
    id: "furn-table-07",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة مفرد بدرج",
    image: "assets/images/products/02-furniture/Asset 21.png",
    description: "طاولة سرير فندقية متكاملة بدرج تخزين لمقبض ذهبي.",
    color: "أبيض",
    size: "550*480*580 سم",
    code: "BTS.T6037"
  },
  {
    id: "furn-table-08",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة زجاجية مربعة",
    image: "assets/images/products/02-furniture/Asset 22.png",
    description: "طاولة جانبية بسطح زجاجي مضلل وهيكل هرمي ذهبي.",
    color: "أسود",
    size: "قياسي",
    code: "BTS.T6022",
  },
    // ==========================================
  // 1. قسم المفروشات والمناشف الفندقية (furnishings)
  // Subcategory: bedding (المفروشات والأسرة)
  // ==========================================
  {
    id: "furnish-pillowcase-01",
    category: "furnishings",
    subcategory: "bedding",
    title: "كيس مخذة",
    image: "assets/images/products/03-furnishings/Asset 26.png",
    description: "كيس مخذة فندقي قطن ناعم عالي الجودة.",
    color: "أبيض",
    size: "80*80 CM",
    code: "BTS.408BB"
  },
  {
    id: "furnish-pillowcase-02",
    category: "furnishings",
    subcategory: "bedding",
    title: "كيس مخذة",
    image: "assets/images/products/03-furnishings/Asset 27.png",
    description: "كيس مخذة فندقي مقاس قياسي.",
    color: "أبيض",
    size: "50*75 CM",
    code: "BTS.407BT"
  },
  {
    id: "furnish-duvet-01",
    category: "furnishings",
    subcategory: "bedding",
    title: "لحاف رويال - شخص واحد",
    image: "assets/images/products/03-furnishings/Asset 28.png",
    description: "لحاف فندقي فاخر حشو ناعم قطن 100%.",
    color: "أبيض",
    size: "230*163 cm (cotton 100%)",
    code: "BTS.409"
  },
  {
    id: "furnish-duvet-cover-01",
    category: "furnishings",
    subcategory: "bedding",
    title: "بيت لحاف - شخص واحد",
    image: "assets/images/products/03-furnishings/Asset 29.png",
    description: "غطاء لحاف فندقي قطن 100% عالي التحمل.",
    color: "أبيض",
    size: "240*170 cm (cotton 100%)",
    code: "BTS.403"
  },
  {
    id: "furnish-duvet-02",
    category: "furnishings",
    subcategory: "bedding",
    title: "لحاف مفرد",
    image: "assets/images/products/03-furnishings/Asset 30.png",
    description: "لحاف فندقي رول مريح وخفيف الوزن.",
    color: "أبيض",
    size: "163*230 CM",
    code: "BTS.409B"
  },
  {
    id: "furnish-protector-01",
    category: "furnishings",
    subcategory: "bedding",
    title: "واقي سرير",
    image: "assets/images/products/03-furnishings/Asset 31.png",
    description: "واقي مرتبة فندقي عازل ومريح بمطاط محيطي.",
    color: "أبيض",
    size: "200*90+30 CM",
    code: "BTS.401"
  },
  {
    id: "furnish-pillow-prot-01",
    category: "furnishings",
    subcategory: "bedding",
    title: "واقي مخده",
    image: "assets/images/products/03-furnishings/Asset 32.png",
    description: "واقي وسادة فندقي حماية مضاعفة وضد السوائل.",
    color: "أبيض",
    size: "80*80 CM",
    code: "BTS.4080B"
  },
  {
    id: "furnish-sheet-01",
    category: "furnishings",
    subcategory: "bedding",
    title: "شرشف سرير",
    image: "assets/images/products/03-furnishings/Asset 34.png",
    description: "شرشف سرير فندقي ناعم ومريح لغرف الضيوف.",
    color: "أبيض",
    size: "170*270 CM",
    code: "BTS.405"
  },
  {
    id: "furnish-pillow-01",
    category: "furnishings",
    subcategory: "bedding",
    title: "مخده رويال",
    image: "assets/images/products/03-furnishings/Asset 35.png",
    description: "وسادة فندقية رويال داعمة للرقبة والرأس.",
    color: "أبيض",
    size: "50*70 CM",
    code: "BTS.407A"
  },
  {
    id: "furnish-pillow-02",
    category: "furnishings",
    subcategory: "bedding",
    title: "مخده كلاسيك",
    image: "assets/images/products/03-furnishings/Asset 36.png",
    description: "وسادة فندقية كلاسيكية مريحة وعالية الجودة.",
    color: "أبيض",
    size: "50*70 CM",
    code: "BTS.407"
  },
  {
    id: "furnish-pillow-prot-02",
    category: "furnishings",
    subcategory: "bedding",
    title: "واقي مخده مقاس قياسي",
    image: "assets/images/products/03-furnishings/Asset 32.png",
    description: "واقي وسادة فندقي بسحاب للغلق.",
    color: "أبيض",
    size: "50*80 CM",
    code: "BTS.408"
  },

  // ==========================================
  // Subcategory: towels (المناشف والأرواب والحمام)
  // ==========================================
  {
    id: "towel-pak-floor-01",
    category: "furnishings",
    subcategory: "towels",
    title: "منشفة أرضية باكستاني الصنع",
    image: "assets/images/products/03-furnishings/Asset 37.png",
    description: "دعاسة/منشفة أرضية قطن باكستاني ممتاز.",
    color: "أبيض",
    size: "40*70 cm - 240 جرام",
    code: "BTS.C105"
  },
  {
    id: "towel-chn-floor-01",
    category: "furnishings",
    subcategory: "towels",
    title: "منشفة أرضية صيني حمام",
    image: "assets/images/products/03-furnishings/Asset 38.png",
    description: "دعاسة أرضية صينية متينة وعالية الامتصاص.",
    color: "أبيض",
    size: "62*33 - وزن 160 جرام",
    code: "BTS.C106"
  },
  {
    id: "towel-slipper-01",
    category: "furnishings",
    subcategory: "towels",
    title: "حذاء حمام رويال",
    image: "assets/images/products/03-furnishings/Asset 39.png",
    description: "شبشب/حذاء حمام فندقي استخدام غرف الضيوف.",
    color: "أبيض",
    size: "قياسي",
    code: "BTS.C101"
  },
  {
    id: "towel-robe-01",
    category: "furnishings",
    subcategory: "towels",
    title: "روب رويال",
    image: "assets/images/products/03-furnishings/Asset 41.png",
    description: "روب حمام فندقي رويال سميك فاخر.",
    color: "أبيض",
    size: "وزن 800 جرام",
    code: "BTS.C108"
  },
  {
    id: "towel-robe-02",
    category: "furnishings",
    subcategory: "towels",
    title: "روب عادي",
    image: "assets/images/products/03-furnishings/Asset 42.png",
    description: "روب حمام قطني مريح للاستخدام اليومي بالفنادق.",
    color: "أبيض",
    size: "وزن 720 جرام",
    code: "BTS.C109"
  },
  {
    id: "towel-pak-body-01",
    category: "furnishings",
    subcategory: "towels",
    title: "منشفه جسم باكستاني",
    image: "assets/images/products/03-furnishings/image-removebg-preview (1).png",
    description: "منشفة حمام كبيرة قطن طبيعي 100% امتصاص عالي.",
    color: "أبيض",
    size: "80*150 cm - وزن 660 جرام",
    code: "BTS.413"
  },
  {
    id: "towel-pak-face-01",
    category: "furnishings",
    subcategory: "towels",
    title: "منشفه وجه باكستاني",
    image: "assets/images/products/03-furnishings/image-removebg-preview (2).png",
    description: "منشفة وجه قطن طبيعي 100% ناعمة جداً.",
    color: "أبيض",
    size: "50*90 cm - وزن 260 جرام",
    code: "BTS.412"
  },
  {
    id: "towel-pak-hand-01",
    category: "furnishings",
    subcategory: "towels",
    title: "منشفه يد باكستاني",
    image: "assets/images/products/03-furnishings/image-removebg-preview.png",
    description: "منشفة يد فندقية قطن طبيعي 100%.",
    color: "أبيض",
    size: "30*35 cm - وزن 50 جرام",
    code: "BTS.411A"
  },
  {
    id: "towel-chn-body-01",
    category: "furnishings",
    subcategory: "towels",
    title: "منشفه جسم صيني",
    image: "assets/images/products/03-furnishings/image-removebg-preview (1).png",
    description: "منشفة كبار/جسم قطن صيني ممتاز.",
    color: "أبيض",
    size: "80*150 cm - وزن 660 جرام",
    code: "BTS.413"
  },
  {
    id: "towel-chn-face-01",
    category: "furnishings",
    subcategory: "towels",
    title: "منشفه وجه صيني",
    image: "assets/images/products/03-furnishings/image-removebg-preview (2).png",
    description: "منشفة وجه صينية عالية الامتصاص.",
    color: "أبيض",
    size: "50*90 cm - وزن 260 جرام",
    code: "BTS.412"
  },
  {
    id: "towel-chn-hand-01",
    category: "furnishings",
    subcategory: "towels",
    title: "منشفه يد صيني",
    image: "assets/images/products/03-furnishings/image-removebg-preview.png",
    description: "منشفة يد صينية قطن 100%.",
    color: "أبيض",
    size: "30*35 cm - وزن 50 جرام",
    code: "BTS.411A"
  },

  // ==========================================
  // 2. قسم الأثاث الفندقي (furniture)
  // Subcategories: chairs, sofas, tables
  // ==========================================
  {
    id: "furn-chair-01",
    category: "furniture",
    subcategory: "chairs",
    title: "كرسي طعام بيج",
    image: "assets/images/products/02-furniture/Asset 4.png",
    description: "كرسي طعام فندقي فاخر بقواعد معدنية ذهبية متقاطعة.",
    color: "بيج",
    size: "460*520*930",
    code: "BTS.T6008"
  },
  {
    id: "furn-chair-02",
    category: "furniture",
    subcategory: "chairs",
    title: "كرسي طعام أخضر",
    image: "assets/images/products/02-furniture/Asset 3.png",
    description: "كرسي طعام مخملي أخضر بتصميم عصري وأرجل ذهبية.",
    color: "أخضر",
    size: "460*520*930",
    code: "BTS.T6009"
  },
  {
    id: "furn-chair-03",
    category: "furniture",
    subcategory: "chairs",
    title: "كرسي طعام أزرق",
    image: "assets/images/products/02-furniture/Asset 2.png",
    description: "كرسي طعام مخملي أزرق كحلي بتطريز فاخر.",
    color: "أزرق",
    size: "460*520*930",
    code: "BTS.T6010"
  },
  {
    id: "furn-chair-04",
    category: "furniture",
    subcategory: "chairs",
    title: "كرسي متعدد الاستخدام",
    image: "assets/images/products/02-furniture/Asset 9.png",
    description: "كرسي مريح بذراعين للأجنحة والاستراحات الفندقية.",
    color: "أخضر",
    size: "قياسي",
    code: "BTS.T7070"
  },
  {
    id: "furn-chair-05",
    category: "furniture",
    subcategory: "chairs",
    title: "كرسي طعام مقاس خاص",
    image: "assets/images/products/02-furniture/Asset 8.png",
    description: "كرسي طعام بإطار معدني ذهبي خلفي بارز.",
    color: "أخضر",
    size: "900*560*470",
    code: "BTS.T6004"
  },
  {
    id: "furn-chair-06",
    category: "furniture",
    subcategory: "chairs",
    title: "كرسي مكتب فاخر",
    image: "assets/images/products/02-furniture/Asset 7.png",
    description: "كرسي مكتب مخمل أسود بقواعد ذهبية متينة.",
    color: "أسود",
    size: "800*500*500",
    code: "BTS.T6012"
  },
  {
    id: "furn-sofa-01",
    category: "furniture",
    subcategory: "sofas",
    title: "كرسي صالة أورانج",
    image: "assets/images/products/02-furniture/Asset 11.png",
    description: "كرسي صالة دائر بتصميم جلد فاخر ولون برتقالي مميز.",
    color: "برتقالي",
    size: "800*700*700",
    code: "BTS.6060A"
  },
  {
    id: "furn-sofa-02",
    category: "furniture",
    subcategory: "sofas",
    title: "كنب ثنائي المقعد",
    image: "assets/images/products/02-furniture/Asset 10.png",
    description: "كنبة مخملية ثنائية باللون البرتقالي للوبيات والأجنحة.",
    color: "برتقالي",
    size: "1800*900*800",
    code: "BTS.A01*2-LP9097-18"
  },
  {
    id: "furn-table-01",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة خدمة فرعية مقوسة (رخام أسود)",
    image: "assets/images/products/02-furniture/Asset 5.png",
    description: "طاولة خدمة جانبية بأسطح رخامية سوداء وقواعد ذهبية.",
    color: "أسود",
    size: "500*400*400",
    code: "BTS.T6049"
  },
  {
    id: "furn-table-02",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة خدمة فرعية مقوسة (رخام أبيض)",
    image: "assets/images/products/02-furniture/Asset 6.png",
    description: "طاولة خدمة جانبية رخام أبيض كلاسيك.",
    color: "أبيض",
    size: "500*400*400",
    code: "BTS.T6048"
  },
  {
    id: "furn-table-03",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة خدمة رئيسية سنتر مقوسة",
    image: "assets/images/products/02-furniture/Asset 14.png",
    description: "طاولة سنتر رخام أبيض للصالات واللوبي.",
    color: "أبيض",
    size: "750*800*1400",
    code: "BTS.T6052"
  },
  {
    id: "furn-table-04",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة خدمة رئيسية سنتر مقوسة (أسود)",
    image: "assets/images/products/02-furniture/Asset 16.png",
    description: "طاولة وسط بوسط الصالة بقواعد مجوفة وقلم أسود فاخر.",
    color: "أسود",
    size: "500*600*1200",
    code: "BTS.T6060"
  },
  {
    id: "furn-table-05",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة مكتب بدرج",
    image: "assets/images/products/02-furniture/Asset 20.png",
    description: "طاولة مكتب فندقية بتصميم مدرن ولون أبيض.",
    color: "أبيض",
    size: "750*600*1000",
    code: "BTS.T6044"
  },
  {
    id: "furn-table-06",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة مفرد بدرج (كومودينو)",
    image: "assets/images/products/02-furniture/Asset 21.png",
    description: "طاولة بجانب السرير متكاملة بدرج تخزين.",
    color: "أبيض",
    size: "550*480*580",
    code: "BTS.T6037"
  },
  {
    id: "furn-table-07",
    category: "furniture",
    subcategory: "tables",
    title: "طاولة زجاجية مربعة",
    image: "assets/images/products/02-furniture/Asset 22.png",
    description: "طاولة جانبية بسطح زجاجي وهيكل هرمي ذهبي.",
    color: "أسود / شفاف",
    size: "قياسي",
    code: "BTS"
  },

  // trash 
  {
  id: "trash-100black",
  category: "equipment",
  subcategory: "trash-cans",
  title: "سلة مهملات دائري سعة 10 لتر - اسود",
  image: "assets/images/products/04-equipment/Asset 45.png",
  description: "سلة مهملات دائرية للغرف الفندقية.",
  color: "أسود",
  size: "250*345mm",
  code: "BTS.100BLACK"
},
{
  id: "trash-100gold",
  category: "equipment",
  subcategory: "trash-cans",
  title: "سلة مهملات دائري سعة 10 لتر - ذهبي",
  image: "assets/images/products/04-equipment/Asset 45.png",
  description: "سلة مهملات دائرية فاخرة باللون الذهبي.",
  color: "ذهبي",
  size: "250*345mm",
  code: "BTS.100GOLD"
},
{
  id: "trash-101",
  category: "equipment",
  subcategory: "trash-cans",
  title: "دلو غرفة ضيوف مزدوج",
  image: "assets/images/products/04-equipment/Asset 46.png",
  description: "دلو غرفة ضيوف مزدوج من الفولاذ الداخلي والخارجي باللون الأسود.",
  color: "أسود / فضي",
  size: "225*270/L10",
  code: "BTS.101"
},
{
  id: "trash-102",
  category: "equipment",
  subcategory: "trash-cans",
  title: "دلو غرفة ضيوف مزدوجة من خشب الماهوجاي الفاخر",
  image: "assets/images/products/04-equipment/Asset 48.png",
  description: "دلو مهملات مزدوج بتشطيب خشبي فاخر.",
  color: "بني خشبي",
  size: "225*270",
  code: "BTS.102"
},
{
  id: "trash-103",
  category: "equipment",
  subcategory: "trash-cans",
  title: "غطاء حواف خارجي عكسي مفرد فاخر مع خلفية سوداء وزهرة صغيرة باللون الذهبي من الجلد",
  image: "assets/images/products/04-equipment/Asset 49.png",
  description: "سلة مهملات جلدية منقوشة بزخارف ذهبية.",
  color: "أسود / ذهبي",
  size: "225*265/L10",
  code: "BTS.103"
},
{
  id: "trash-615",
  category: "equipment",
  subcategory: "trash-cans",
  title: "سله دائريه اسود مع غطاء-نقشه فرعونيه",
  image: "assets/images/products/04-equipment/Asset 47.png",
  description: "سلة دائرية بطلاء وملمس فرعوني مميز.",
  color: "أسود",
  size: "قياسي",
  code: "BTS.615"
},
{
  id: "trash-104",
  category: "equipment",
  subcategory: "trash-cans",
  title: "برميل بكرة بلاستيكية سوداء مزدوجة الطبقة",
  image: "assets/images/products/04-equipment/Asset 50.png",
  description: "برميل بلاستيكي مزدوج الطبقة عالي التحمل.",
  color: "أسود",
  size: "200*260",
  code: "BTS.104"
},
{
  id: "trash-105",
  category: "equipment",
  subcategory: "trash-cans",
  title: "برميل بكرة بلاستيكية بيضاء مزدوجة الطبقة",
  image: "assets/images/products/04-equipment/Asset 51.png",
  description: "برميل بلاستيكي أبيض مزدوج الطبقة.",
  color: "أبيض",
  size: "200*260",
  code: "BTS.105"
},
{
  id: "trash-106black-white",
  category: "equipment",
  subcategory: "trash-cans",
  title: "سلة مهملات فولاذ مطلي - أبيض وأسود",
  image: "assets/images/products/04-equipment/Asset 53.png",
  description: "سلة مهملات كبيرة فولاذية للممرات واللوبي.",
  color: "أسود / فضي",
  size: "340*260*650mm",
  code: "BTS.106BLACK.WHITE"
},
{
  id: "trash-106black-gold",
  category: "equipment",
  subcategory: "trash-cans",
  title: "سلة مهملات فولاذ مطلي - ذهبي وأسود",
  image: "assets/images/products/04-equipment/Asset 54.png",
  description: "سلة مهملات مربعة بإطار ذهبي فاخر.",
  color: "أسود / ذهبي",
  size: "340*260*650mm",
  code: "BTS.106BLACK.GOLD"
},
{
  id: "trash-107",
  category: "equipment",
  subcategory: "trash-cans",
  title: "سلة مهملات + طفاية دائرية",
  image: "assets/images/products/04-equipment/Asset 55.png",
  description: "سلة مهملات دائرية أسطوانية مزودة بطفاية سجائر علوية.",
  color: "ذهبي / فضي",
  size: "قياسي",
  code: "BTS.107"
},
{
  id: "trash-110s",
  category: "equipment",
  subcategory: "trash-cans",
  title: "دلو كبير باللونين الأسود والذهبي مع أنبوب",
  image: "assets/images/products/04-equipment/Asset 56.png",
  description: "حاوية مهملات مستطيلة فاخرة بفتحة جانبية.",
  color: "أسود / برونزي",
  size: "330*330*760 / 290*290*720",
  code: "BTS.110S / BTS.110"
},
{
  id: "trash-108",
  category: "equipment",
  subcategory: "trash-cans",
  title: "دلو نوع الميناء من الفولاذ المقاوم للصدأ (كبير)",
  image: "assets/images/products/04-equipment/Asset 58.png",
  description: "سلة مهملات استيل كبيرة مفتوحة من الأعلى.",
  color: "فضي",
  size: "480*820",
  code: "BTS.108"
},
{
  id: "trash-109",
  category: "equipment",
  subcategory: "trash-cans",
  title: "دلو نمط الميناء الكبير الجديد من الفولاذ المقاوم للصدأ",
  image: "assets/images/products/04-equipment/Asset 59.png",
  description: "سلة مهملات استيل غطاء متأرجح شبه مصبوب.",
  color: "فضي",
  size: "380*750mm",
  code: "BTS.109"
},
{
  id: "trash-111",
  category: "equipment",
  subcategory: "trash-cans",
  title: "رقانة سجائر أرضية مفتوحة من الأعلى باللون التيتانيوم البيج",
  image: "assets/images/products/04-equipment/Asset 60.png",
  description: "عمود طفاية وسلة مهملات رخامي بيج.",
  color: "بيج",
  size: "300*300*800",
  code: "BTS.111"
},
{
  id: "trash-112",
  category: "equipment",
  subcategory: "trash-cans",
  title: "رقانة سجائر أرضية مفتوحة من الأعلى باللون التيتانيوم البيج (مقاس متوسط)",
  image: "assets/images/products/04-equipment/Asset 61.png",
  description: "عمود طفاية وسلة مهملات رخامي بيج.",
  color: "بيج",
  size: "300*300*700",
  code: "BTS.112"
},
{
  id: "trash-113",
  category: "equipment",
  subcategory: "trash-cans",
  title: "وعاء زهور باللونين الأسود والذهبي مع دلو رخام أفقي",
  image: "assets/images/products/04-equipment/Asset 62.png",
  description: "حاوية مهملات بتصميم رخامي رمادي الحديث.",
  color: "رمادي رخامي",
  size: "300*300*800",
  code: "BTS.113"
},
{
  id: "trash-114-240l",
  category: "equipment",
  subcategory: "trash-cans",
  title: "دلو بلاستيكي أزرق بسعة 240 لترًا مع دواسة قدم",
  image: "assets/images/products/04-equipment/Asset 63.png",
  description: "حاوية نفايات خارجية كبيرة بعجلات ودواسة قدم.",
  color: "أزرق",
  size: "730*580*1000/240L",
  code: "BTS.114.240L"
},
{
  id: "trash-114-120l",
  category: "equipment",
  subcategory: "trash-cans",
  title: "دلو بلاستيكي أزرق بسعة 120 لترًا مع دواسة قدم",
  image: "assets/images/products/04-equipment/Asset 63.png",
  description: "حاوية نفايات خارجية بعجلات ودواسة قدم.",
  color: "أزرق",
  size: "550*470*950/120L",
  code: "BTS.114.120L"
},
// safes 
{
  id: "safe-20e-blue",
  category: "equipment",
  subcategory: "safes",
  title: "خزانه أمانات رقميه - أزرق",
  image: "assets/images/products/04-equipment/Asset 66.png",
  description: "خزانة أمانات رقمية إلكترونية للغرف الفندقية.",
  color: "أزرق",
  size: "قياسي",
  code: "BTS.20E.BLUE"
},
{
  id: "safe-20e-black",
  category: "equipment",
  subcategory: "safes",
  title: "خزانه أمانات رقميه - أسود",
  image: "assets/images/products/04-equipment/Asset 65.png",
  description: "خزانة أمانات رقمية إلكترونية للغرف الفندقية.",
  color: "أسود",
  size: "قياسي",
  code: "BTS.20E.BLACK"
},
// Kettles 
{
  id: "kettle-500ss",
  category: "equipment",
  subcategory: "kettles",
  title: "طقم غلاية شاي - سيلفر",
  image: "assets/images/products/04-equipment/Asset 68.png",
  description: "طقم غلاية استانلس ستيل مع صينية وأكواب.",
  color: "سيلفر / أسود",
  size: "قياسي",
  code: "BTS.500SS"
},
{
  id: "kettle-500black",
  category: "equipment",
  subcategory: "kettles",
  title: "طقم غلاية شاي - أسود",
  image: "assets/images/products/04-equipment/Asset 69.png",
  description: "طقم غلاية بلاستيك مقوى أسود مع صينية وأكواب.",
  color: "أسود",
  size: "قياسي",
  code: "BTS.500BLACK"
},
{
  id: "kettle-500",
  category: "equipment",
  subcategory: "kettles",
  title: "طقم غلاية شاي لون اسود كوب - سكريه",
  image: "assets/images/products/04-equipment/Asset 69.png",
  description: "طقم غلاية فاخر مع صينية ضيافة زجاجية سوداء ومقسّم سكريات.",
  color: "أسود",
  size: "قياسي",
  code: "BTS.500"
},
// bathroom 
{
  id: "bath-tray-011",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "طبق ستانلس ستيل كبير",
  image: "assets/images/products/04-equipment/Asset 70.png",
  description: "طبق صابون / ضيافة استانلس ستيل مسطح.",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS.011"
},
{
  id: "bath-soap-c103",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "صحن حامل صابون أسود مع أرجُل",
  image: "assets/images/products/04-equipment/Asset 71.png",
  description: "صحن حامل صابون زجاجي أسود بأرجل كروم.",
  color: "أسود",
  size: "27.5*36.5*42سم",
  code: "BTS.C103"
},
{
  id: "bath-soap-c110-white",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "صحن حامل صابون أبيض",
  image: "assets/images/products/04-equipment/Asset 72.png",
  description: "صحن صابون أكريليك/زجاج أبيض.",
  color: "أبيض",
  size: "27.5*36.5*42سم",
  code: "BTS.C110"
},
{
  id: "bath-soap-c110-black",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "صحن حامل صابون أسود",
  image: "assets/images/products/04-equipment/Asset 73.png",
  description: "صحن صابون أكريليك/زجاج أسود.",
  color: "أسود",
  size: "27.5*36.5*42سم",
  code: "BTS.C110"
},
{
  id: "bath-dispenser-120b",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "ضاغط صابون حجم 350ملى",
  image: "assets/images/products/04-equipment/Asset 74.png",
  description: "موزع صابون سائل جداري أبيض.",
  color: "أبيض",
  size: "350 ml",
  code: "BTS.120B"
},
{
  id: "bath-laundry-131",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "تروللى الملابس فولاذ مقاوم للصدأ",
  image: "assets/images/products/04-equipment/assets 75.png",
  description: "سلة غسيل قماشية هيكلية قابلة للطي بعجلات.",
  color: "أزرق / أبيض",
  size: "900x650x800",
  code: "BTS_131"
},
{
  id: "bath-rack-10100",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "رف مناشف فولاذ مقاوم للصدأ",
  image: "assets/images/products/04-equipment/Asset 76.png",
  description: "رف جداري متعدد الطبقات للمناشف.",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS-10100"
},
{
  id: "bath-corner-20105",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "صبانة مثلث من الفولاذ المقاوم للصدأ",
  image: "assets/images/products/04-equipment/Asset 77.png",
  description: "رف زاوية معدني للشور والصابون.",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS.20105"
},
{
  id: "bath-soap-10105",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "صبانة من الفولاذ المقاوم للصدأ",
  image: "assets/images/products/04-equipment/Asset 78.png",
  description: "حامل صابون جداري استيل.",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS10105"
},
{
  id: "bath-towel-10107",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "فواطه 60 سم",
  image: "assets/images/products/04-equipment/Asset 79.png",
  description: "علاقة مناشف وشكك مستقيمة مقاس 60 سم.",
  color: "سيلفر",
  size: "60 cm",
  code: "BTS-10107"
},
{
  id: "bath-ring-10108",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "علاقة منشفة دائرية",
  image: "assets/images/products/04-equipment/Asset 80.png",
  description: "حلقة تعليق المناشف دائرية الشكل.",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS-10108"
},
{
  id: "bath-paper-10106",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "وراقـة منايل",
  image: "assets/images/products/04-equipment/Asset 81.png",
  description: "حامل ورق تواليت استيل مزود بغطاء علوي.",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS-10106"
},
{
  id: "bath-brush-steel",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "فرشاة مرحاض من الفولاذ المقاوم للصدأ",
  image: "assets/images/products/04-equipment/assets 82.png",
  description: "فرشاة تنظيف المرحاض في حامل أسطواني من الاستيل.",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS.BRUSH"
},
{
  id: "bath-hook-10103",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "علاقة روب مفردة",
  image: "assets/images/products/04-equipment/assets 83.png",
  description: "مقبض جداري لتعليق الملابس والأرواب.",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS-10103"
},
{
  id: "bath-hook-20103",
  category: "equipment",
  subcategory: "bathroom-acc",
  title: "علاقة روب مزدوج",
  image: "assets/images/products/04-equipment/assets 84.png",
  description: "علاقة روب ثنائية الاتجاه تثبت على الحائط.",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS..20103"
},
//
{
  id: "trolley-housekeeping-130",
  category: "trolleys",
  subcategory: "housekeeping",
  title: "عربة الهوس كيبنج",
  image: "assets/images/products/04-equipment/assets 85.png",
  description: "عربة نظافة وخدمة غرف فندقية متعددة الأرفف مع أكياس جانبية.",
  color: "بني / خشبي",
  size: "قياسي",
  code: "BTS.130"
},
{
  id: "trolley-luggage-619",
  category: "trolleys",
  subcategory: "luggage",
  title: "عربة حاملة الحقائب",
  image: "assets/images/products/04-equipment/assets 86.png",
  description: "عربة نقل حقائب فندقية هيكل فولاذ مقاوم للصدأ مطلي بالكهرباء مع ذهب التيتانيوم وسجاد أحمر.",
  color: "ذهبي / أحمر",
  size: "1050x620x1860mm",
  code: "BTS_619"
},
{
  id: "trolley-luggage-622",
  category: "trolleys",
  subcategory: "luggage",
  title: "عربة حاملة حقائب صغيرة عجلتين",
  image: "assets/images/products/04-equipment/Asset 87.png",
  description: "عربة نقل أمتعة خفيفة وعملية بعجلتين.",
  color: "ذهبي / أحمر",
  size: "قياسي",
  code: "BTS.622"
},
//
{
  id: "lobby-post-150",
  category: "equipment",
  subcategory: "lobby",
  title: "عمود تشريفة (حواجز توجيه)",
  image: "assets/images/products/04-equipment/Asset 88.png",
  description: "أعمدة تشريفة من الفولاذ المقاوم للصدأ المطلي بذهب التيتانيوم مع حبل مخملي أحمر.",
  color: "ذهبي / أحمر",
  size: "320x950mm",
  code: "BTS_150"
},
{
  id: "lobby-shoeshine-627a",
  category: "equipment",
  subcategory: "lobby",
  title: "ماكينة تلميع أحذية",
  image: "assets/images/products/04-equipment/Asset 89.png",
  description: "جهاز كهربائي أوتوماتيكي لتلميع الأحذية الفندقية.",
  color: "أصفر ذهبي / بني",
  size: "قياسي",
  code: "BTS 627A"
},
{
  id: "room-sign-620",
  category: "equipment",
  subcategory: "room-acc",
  title: "لوحة استقبال",
  image: "assets/images/products/04-equipment/Asset 90.png",
  description: "حامل لوحة إرشادات وتوجيه فاخر للاستقبال.",
  color: "ذهبي",
  size: "قياسي",
  code: "BTS 620"
},
{
  id: "room-energy-540016",
  category: "equipment",
  subcategory: "room-acc",
  title: "موفر طاقة صيني",
  image: "assets/images/products/04-equipment/Asset 91.png",
  description: "مفتاح كارت توفير الطاقة الفندقي جداري.",
  color: "أبيض",
  size: "قياسي",
  code: "BTS.540016"
},
{
  id: "room-iron-501",
  category: "equipment",
  subcategory: "room-acc",
  title: "مكواة ملابس لون أرجواني وسماوي",
  image: "assets/images/products/04-equipment/Asset 92.png",
  description: "مكواة بخار بسطح غير لاصق، فتحات بخار ورشاش ماء مع ترموستات تحكم بالحرارة.",
  color: "سماوي / أرجواني",
  size: "قياسي",
  code: "BTS.501"
},
{
  id: "room-hairdryer-3322",
  category: "equipment",
  subcategory: "room-acc",
  title: "استشوار مجفف الشعر",
  image: "assets/images/products/04-equipment/Asset 93.png",
  description: "مجفف شعر فندقي مثبت على الحائط.",
  color: "أبيض",
  size: "قياسي",
  code: "BTS 3322"
},
{
  id: "room-phone-123",
  category: "equipment",
  subcategory: "room-acc",
  title: "تليفون غرفة - شاشة صغيرة",
  image: "assets/images/products/04-equipment/Asset 94.png",
  description: "هاتف أرضي فندقي بسلك وشاشة عرض صغيرة.",
  color: "أسود",
  size: "قياسي",
  code: "BTS.123"
},
{
  id: "scale-cb401-red",
  category: "equipment",
  subcategory: "room-acc",
  title: "ميزان إلكتروني - أحمر",
  image: "assets/images/products/04-equipment/Asset 95.png",
  description: "ميزان قياس وزن الجسم زجاجي إلكتروني.",
  color: "أحمر",
  size: "قياسي",
  code: "BTS.CB401RED"
},
{
  id: "scale-cb401-black",
  category: "equipment",
  subcategory: "room-acc",
  title: "ميزان إلكتروني - أسود",
  image: "assets/images/products/04-equipment/Asset 96.png",
  description: "ميزان قياس وزن الجسم زجاجي إلكتروني.",
  color: "أسود",
  size: "قياسي",
  code: "BTS.CB401BLACK"
},
{
  id: "scale-cb401-green",
  category: "equipment",
  subcategory: "room-acc",
  title: "ميزان إلكتروني - أخضر",
  image: "assets/images/products/04-equipment/Asset 97.png",
  description: "ميزان قياس وزن الجسم زجاجي إلكتروني.",
  color: "أخضر",
  size: "قياسي",
  code: "BTS.CB401GREEN"
},
{
  id: "lock-cylinder-10186",
  category: "hardware",
  subcategory: "locks",
  title: "قفل باب (سلندر)",
  image: "assets/images/products/04-equipment/Asset 98.png",
  description: "قلب قفل باب أسطواني (سلندر كروم).",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS 10186"
},
{
  id: "lock-knob-silver",
  category: "hardware",
  subcategory: "locks",
  title: "مقبض كروي للباب",
  image: "assets/images/products/04-equipment/Asset 99.png",
  description: "مقبض دائري للغرف والمكاتب.",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS.KNOB-SILVER"
},
{
  id: "lock-rosette-bronze",
  category: "hardware",
  subcategory: "locks",
  title: "غطاء قفل / روزتة برونزي",
  image: "assets/images/products/04-equipment/Asset 100.png",
  description: "غطاء حماية وسقاطة قفل دائرية.",
  color: "برونزي",
  size: "قياسي",
  code: "BTS.ROSETTE-BRZ"
},
{
  id: "lock-body-silver",
  category: "hardware",
  subcategory: "locks",
  title: "كالون باب داخلي - سيلفر",
  image: "assets/images/products/04-equipment/asset 101.png",
  description: "جسم كالون باب ميكانيكي (Mortise Lock).",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS.MORTISE-SLV"
},
{
  id: "lock-body-bronze",
  category: "hardware",
  subcategory: "locks",
  title: "كالون باب داخلي - برونزي",
  image: "assets/images/products/04-equipment/asset 102.png",
  description: "جسم كالون باب ميكانيكي مع واجهة برونزية.",
  color: "برونزي",
  size: "قياسي",
  code: "BTS.MORTISE-BRZ"
},
{
  id: "lock-body-gold",
  category: "hardware",
  subcategory: "locks",
  title: "كالون باب داخلي - ذهبي",
  image: "assets/images/products/04-equipment/asset 103.png",
  description: "جسم كالون باب ميكانيكي مع واجهة ذهبية.",
  color: "ذهبي",
  size: "قياسي",
  code: "BTS.MORTISE-GLD"
},
{
  id: "handle-door-10272",
  category: "hardware",
  subcategory: "handles",
  title: "مقبض باب حديث",
  image: "assets/images/products/04-equipment/asset 104.png",
  description: "مقبض باب أنيق على قاعدة دائرية.",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS 10272"
},
{
  id: "handle-door-bronze",
  category: "hardware",
  subcategory: "handles",
  title: "مقبض باب كلاسيك",
  image: "assets/images/products/04-equipment/Asset 105.png",
  description: "مقبض باب بتشطيب برونزي أنيق.",
  color: "برونزي",
  size: "قياسي",
  code: "BTS.HANDLE-BRZ"
},
{
  id: "handle-door-10267",
  category: "hardware",
  subcategory: "handles",
  title: "مقبض باب أنيق",
  image: "assets/images/products/04-equipment/Asset 106.png",
  description: "مقبض باب فولاذي مودرن.",
  color: "سيلفر",
  size: "قياسي",
  code: "BTS 10267"
},
{
  id: "door-hinge-bronze",
  category: "hardware",
  subcategory: "accessories",
  title: "مفصلة باب",
  image: "assets/images/products/04-equipment/Asset 107.png",
  description: "مفصلة باب مربعة فولاذية متينة.",
  color: "برونزي / سيلفر",
  size: "قياسي",
  code: "BTS.HINGE-BRZ"
},
{
  id: "door-chain-10136",
  category: "hardware",
  subcategory: "accessories",
  title: "سلسلة ترباس للأبواب",
  image: "assets/images/products/04-equipment/Asset 108.png",
  description: "سلسلة أمان ومغلاق جداري للأبواب الفندقية.",
  color: "ذهبي / أسود",
  size: "قياسي",
  code: "BTS 10136"
}

];