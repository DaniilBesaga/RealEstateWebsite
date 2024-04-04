using Microsoft.EntityFrameworkCore;
using R_E_Website.Server.Models;

namespace R_E_Website.Server.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext()
        {
        }
        public DatabaseContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        { }

        public DbSet<ClientInfo> ClientsInfo { get; set; }
        public DbSet<Complex> Complexes { get; set; }
        public DbSet<Estate> Estates { get; set; }
        public DbSet<Newsletter> Newsletters { get; set; }
        public DbSet<Request> Requests { get; set; }
        public DbSet<RequestEstate> RequestsEstate { get; set; }
        public DbSet<Review> Reviews { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Attribute>()
            //        .Property(a => a.Type)
            //        .HasConversion<string>();

            //modelBuilder.Entity<CartItem>()
            //    .HasOne(ci => ci.User)
            //    .WithMany(u => u.CartItems)
            //    .HasForeignKey(ci => ci.UserId)
            //    .OnDelete(DeleteBehavior.ClientCascade);

            //modelBuilder.Entity<CartItem>()
            //    .HasOne(ci => ci.Product)
            //    .WithMany(p => p.CartItems)
            //    .HasForeignKey(ci => ci.ProductId)
            //    .OnDelete(DeleteBehavior.ClientCascade);

            //modelBuilder.Entity<User>()
            //    .HasOne(u => u.UserRole)
            //    .WithOne(r => r.User);

            modelBuilder.Entity<Request>()
                    .HasOne(r => r.ClientInfo)
                    .WithOne(c=>c.Request)
                    .HasForeignKey<ClientInfo>(c=>c.RequestId);
            modelBuilder.Entity<Request>()
                    .HasOne(r => r.EstateInfo)
                    .WithOne(e => e.Request)
                    .HasForeignKey<RequestEstate>(e => e.RequestId);
            modelBuilder.Entity<Request>()
                    .HasOne(r => r.EstateInfo)
                    .WithOne(i => i.Request)
                    .HasForeignKey<RequestEstate>(e => e.RequestId)
                    .OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<Request>()
                    .HasOne(r => r.ClientInfo)
                    .WithOne(c => c.Request)
                    .HasForeignKey<ClientInfo>(c => c.RequestId)
                    .OnDelete(DeleteBehavior.Cascade);


            modelBuilder.Entity<Estate>().HasData(
            #region flats
                new Estate()
                {
                    Id = 1,
                    City = "Київ",
                    ComplexName = "044",
                    ComplexUrl = "/",
                    District = "Подільський",
                    EstateAddress = "Данченка Сергія вулиця, 5",
                    EstateFloor = 5,
                    NumberOfFloors = 12,
                    RoomCount = 1,
                    TotalSquare = 58,
                    LivingSquare = 17,
                    KitchenSquare = 21,
                    EstateType = Enums.EstateType.Flat,
                    PriceUah = 2220000,
                    IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.867111593259!2d30.424891776440422!3d50.49943097160157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd7142742e6b%3A0x55aeef587a2cd137!2z0LLRg9C7LiDQodC10YDQs9GW0Y8g0JTQsNC90YfQtdC90LrQsCwgNSwg0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCwLCAwMjAwMA!5e0!3m2!1suk!2sro!4v1712213584322!5m2!1suk!2sro",
                    ImgsUrlFolder = "https://profirealt.blob.core.windows.net/flats/DanchenkaSerhiyaAvenue5",
                    PhoneNumber = "+380-98-056-45-92",
                    HouseSeria = "Спецпроект/Совмін",
                    Discription = "Затишна квартира на 1 кімнату у місті Київ, район Подільський, " +
                    "знаходиться на 5 поверсі. Площа становить 58 м2." + "Просторна кухня-вітальня оснащена необхідною " +
                    "вбудованою побутовою технікою та меблями високої якості. На підлогах ламінат та кахель. " +
                    "У просторому санвузлі ванна, раковина, унітаз, пральна машина. Житловий комплекс із системою " +
                    "відеоспостереження та охороною по периметру. На території дитячі майданчики, тренажери, поряд " +
                    "каскад озер та паркова зона. "
                },

            new Estate()
            {
                Id = 2,
                City = "Київ",
                ComplexName = "4U",
                ComplexUrl = "/",
                District = "Голосіївський",
                EstateAddress = "Голосіївська вулиця, 84",
                EstateFloor = 20,
                NumberOfFloors = 27,
                RoomCount = 2,
                TotalSquare = 65,
                LivingSquare = 22,
                KitchenSquare = 25,
                EstateType = Enums.EstateType.Flat,
                PriceUah = 2500000,
                IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.3127500478186!2d30.50965707643425!3d50.39800877158229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8caeb3f2005%3A0xba19ac7ee3157eec!2z0LLRg9C70LjRhtGPINCT0L7Qu9C-0YHRltGX0LLRgdGM0LrQsCwgODQsINCa0LjRl9CyLCDQo9C60YDQsNGX0L3QsCwgMDMwMzk!5e0!3m2!1suk!2sro!4v1712214807653!5m2!1suk!2sro",
                ImgsUrlFolder = "https://profirealt.blob.core.windows.net/flats/HolosievkiyAvenue84",
                PhoneNumber = "+380-98-156-43-92",
                HouseSeria = "Спецпроект/Новобуд",
                Discription = "Чудова двокімнатна квартира в самому центрі Києва, вражає своєю просторістю " +
                    "та затишком. Загальна площа складає 75 м2, з просторою вітальнею та вбудоваою кухнею. В квартирі " +
                    "є все необхідне для комфортного проживання. Для майбутніх мешканців є підземний паркінг та " +
                    "парковочні місця біля будинку."
            },

            new Estate()
            {
                Id = 3,
                City = "Київ",
                ComplexName = "Bristol",
                ComplexUrl = "/",
                District = "Подільський",
                EstateAddress = "Правди проспект, 49",
                EstateFloor = 3,
                NumberOfFloors = 15,
                RoomCount = 3,
                TotalSquare = 120,
                LivingSquare = 55,
                KitchenSquare = 41,
                EstateType = Enums.EstateType.Flat,
                PriceUah = 3000000,
                IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.562696674374!2d30.446142476440812!3d50.505096171602645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd81c10010a9%3A0xec2be2e87c8f8c50!2z0L_RgNC-0YHQv9C10LrRgiDQn9GA0LDQstC00LgsIDUsINCa0LjRl9CyLCDQo9C60YDQsNGX0L3QsCwgMDIwMDA!5e0!3m2!1suk!2sro!4v1712217032809!5m2!1suk!2sro",
                ImgsUrlFolder = "https://profirealt.blob.core.windows.net/flats/PravduAvenue49",
                PhoneNumber = "+380-97-036-13-22",
                HouseSeria = "Спецпроект/Совмін",
                Discription = "Елітна трьохкімнатна квартира з видом на море в інноваційному житловому центрі" +
                    " Одеси. Площа квартири 120 м2, велика вітальня, окрема кухня з виходом на балкон, дві спальні та " +
                    "два санвузли. Житловий комплекс має власний парк і дитячий сад, а також власну інфраструктуру." +
                    " Для мешканців парковка, охорона та консьєрж-сервіс."
            },

            new Estate()
            {
                Id = 4,
                City = "Київ",
                ComplexName = "Arch House",
                ComplexUrl = "/",
                District = "Позняки",
                EstateAddress = "Ревутського вулиця, 40В",
                EstateFloor = 5,
                NumberOfFloors = 12,
                RoomCount = 1,
                TotalSquare = 130,
                LivingSquare = 78,
                KitchenSquare = 41,
                EstateType = Enums.EstateType.Flat,
                PriceUah = 3500000,
                IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.045422568074!2d30.646904176434465!3d50.40299107158327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5433bd651e7%3A0x6d219c38a3f1d88b!2z0LLRg9C70LjRhtGPINCg0LXQstGD0YbRjNC60L7Qs9C-LCA0MNCSLCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LAsIDAyMDY4!5e0!3m2!1suk!2sro!4v1712217212097!5m2!1suk!2sro",
                ImgsUrlFolder = "https://profirealt.blob.core.windows.net/flats/RevutskogoAvenue40B",
                PhoneNumber = "+380-98-056-45-92",
                HouseSeria = "Спецпроект/Новобуд",
                Discription = "Простора квартира з чотирма спальнями в новобудові з закритою територією, дитячим" +
                    " майданчиком та парковкою. Квартира з якісним ремонтом, повністю укомплектована меблями і технікою." +
                    " Сучасне планування з кухнею-вітальнею, три санвузли, вбудована кухня, балкон з чудовим краєвидом." +
                    " У дворі є місце для парковки авто, ліфт та дитячий майданчик."
            },
            #endregion flats

            #region houses
             new Estate()
             {
                 Id = 5,
                 City = "Бровари",
                 EstateAddress = "Ірпінська вулиця, 40",
                 NumberOfFloors = 2,
                 HouseArea = 10,
                 RoomCount = 4,
                 TotalSquare = 208,
                 LivingSquare = 78,
                 KitchenSquare = 41,
                 EstateType = Enums.EstateType.House,
                 PriceUah = 13000000,
                 IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.0843706060673!2d30.771124976440102!3d50.49538747160081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4dbda9121c535%3A0x8ba7d1c01879f680!2z0LLRg9C70LjRhtGPINCG0YDQv9GW0L3RgdGM0LrQsCwgNDAsINCR0YDQvtCy0LDRgNC4LCDQmtC40ZfQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsCwgMDc0MDI!5e0!3m2!1suk!2sro!4v1712218051006!5m2!1suk!2sro",
                 ImgsUrlFolder = "https://profirealt.blob.core.windows.net/houses/IrpinskaStreet40",
                 PhoneNumber = "+380-95-126-33-12",
                 HouseMaterial = "Брус",
                 Discription = "4-х кімнатний, двоповерховий будинок із профільного бруса, " +
                 "з лазнею та сонячною електростанцією, загальною площею 208м. У Броварах.\r\n10 соток землі\r\nНавіс " +
                 "під автомобілі\r\nДистанційні ворота\r\nВода – свердловина 50 м\r\n" +
                 "Газ\r\nКаналізація - двокамерний септик\r\nЕлектрика - централізована 15 кВт та сонячна Електростанція " +
                 "на 10 кВт з оформленим зеленим тарифом та чистим прибутком 500-600 дол\r\nСигналізація по периметру\r\n" +
                 "Газон з автополивом\r\nТри котли - газовий, електро та твердопаливний"
             },

              new Estate()
              {
                  Id = 6,
                  City = "Київ",
                  EstateAddress = "Польова вулиця, 7",
                  NumberOfFloors = 2,
                  HouseArea = 25,
                  RoomCount = 6,
                  TotalSquare = 180,
                  LivingSquare = 110,
                  KitchenSquare = 35,
                  EstateType = Enums.EstateType.House,
                  PriceUah = 5500000,
                  IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.2573326057877!2d30.58722827644112!3d50.510778571603694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d1a631655ca3%3A0x3d415faa4a6c3810!2z0LLRg9C70LjRhtGPINCf0L7Qu9GM0L7QstCwLCA3LCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LAsIDAyMDAw!5e0!3m2!1suk!2sro!4v1712218225594!5m2!1suk!2sro",
                  ImgsUrlFolder = "https://profirealt.blob.core.windows.net/houses/PoljovaStreet7",
                  PhoneNumber = "+380-98-036-34-52",
                  HouseMaterial = "Газоблок",
                  Discription = "Двоповерховий будинок. Скважина - 60м.п. підведено в будинок, її при ямок можливо " +
                  "використовувати, як погріб.лектрика 32 кВт розведена по будинку і частково на другому поверсі + " +
                  "зроблене заземлення. В будинок кабель заходить під землею.\r\nТеплі водяні поли з ел.котлем " +
                  "Bosh 24 кВт\r\nВ будинку на першому поверсі чистова стяжка, на другому дерев'яне перекриття.\r\n" +
                  "Частково присутня штукатурка."
              },

               new Estate()
               {
                   Id = 7,
                   City = "Славгород",
                   EstateAddress = "Шевченко вулиця, 20",
                   NumberOfFloors = 2,
                   HouseArea = 6,
                   RoomCount = 5,
                   TotalSquare = 141,
                   LivingSquare = 100,
                   KitchenSquare = 15,
                   EstateType = Enums.EstateType.House,
                   PriceUah = 6000000,
                   IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.504179227309!2d35.515739276295236!3d48.10050907123939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc1636c45c1837%3A0x6bb6266408593de5!2z0LLRg9C70LjRhtGPINCo0LXQstGH0LXQvdC60L4sIDIwLCDQodC70LDQstCz0L7RgNC-0LQsINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsCwgNTI1ODE!5e0!3m2!1suk!2sro!4v1712219240040!5m2!1suk!2sro",
                   ImgsUrlFolder = "https://profirealt.blob.core.windows.net/houses/SchevchenkoStreet20",
                   PhoneNumber = "+380-95-156-13-72",
                   HouseMaterial = "Цегла",
                   Discription = "Опалення - газовий двоконтурний котел, оплата за лічильником, також на будинок " +
                   "заведено 2 фази по 16 кВт електроенергії, встановлений лічильник День - Ніч, прямий договір з ДТЕК. " +
                   "Стіни - цегла(380 мм) + утеплення(60 мм).Зовні - кароїд + фарбування. Дах - бітумна черепиця. " +
                   "У будинку встановлено справжній камін"
               },

                new Estate()
                {
                    Id = 8,
                    City = "Миргород",
                    EstateAddress = "Троїцька вулиця, 10",
                    NumberOfFloors = 1,
                    HouseArea = 20,
                    RoomCount = 2,
                    TotalSquare = 50,
                    LivingSquare = 23,
                    KitchenSquare = 6,
                    EstateType = Enums.EstateType.House,
                    PriceUah = 1300000,
                    IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.928304923976!2d33.608432776408264!3d49.97520307150526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d7b36b78ecb113%3A0xf373724f4667200!2z0KLRgNC-0ZfRhtGM0LrQsCDQstGD0LvQuNGG0Y8sIDEwLCDQnNC40YDQs9C-0YDQvtC0LCDQn9C-0LvRgtCw0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDRl9C90LAsIDM3NjAw!5e0!3m2!1suk!2sro!4v1712219390838!5m2!1suk!2sro",
                    ImgsUrlFolder = "https://profirealt.blob.core.windows.net/houses/TroitskaStreet10",
                    PhoneNumber = "+380-99-346-03-02",
                    HouseMaterial = "Цегла",
                    Discription = "Будинок деревяний але обкладений цеглою, у будинку, газові конвектори, грубка для " +
                    "альтернативного опалення будинку, встановлено металопластикові вікна. Також є топоміжні примішення, " +
                    "літня кухня та господарська споруда, а також погріб для зберігання продуктів. Ділянка розташована у " +
                    "зручному місці, поруч школа, садок, магазини і транспортна зупинка."
                },

            #endregion

            #region land

            new Estate()
            {
                Id = 9,
                City = "Виноградів",
                EstateAddress = "Черешнева, 38",
                TotalSquare = 100,
                EstateType = Enums.EstateType.Land,
                PriceUah = 1370000,
                IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.133083235615!2d23.02698667629793!3d48.14623947124443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47383a6bf94f9bf5%3A0xa82c66cba6bb5f2a!2z0LLRg9C70LjRhtGPINCn0LXRgNC10YjQvdC10LLQsCwgMzgsINCS0LjQvdC-0LPRgNCw0LTRltCyLCDQl9Cw0LrQsNGA0L_QsNGC0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0ZfQvdCwLCA5MDMwMA!5e0!3m2!1suk!2sro!4v1712229626396!5m2!1suk!2sro",
                ImgsUrlFolder = "https://profirealt.blob.core.windows.net/lands/Chereshnevaya38",
                PhoneNumber = "+380-96-566-11-04",
                Discription = "Продається земельна ділянка під будівництво будинку. Площа 11 соток, р-н геріатричного " +
                "пансіонату, \"Школярка\") Комунікації на ділянці відсутні (електрика, газ підведені поруч із ділянкою) " +
                "Прекрасне розташування. Поруч збудовані будинки"
            },
            new Estate()
            {
                Id = 10,
                City = "Новоселиця",
                EstateAddress = "вулиця Глебова",
                TotalSquare = 90,
                EstateType = Enums.EstateType.Land,
                PriceUah = 1300000,
                IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.984300952943!2d26.26985727630265!3d48.2261768712533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734768081c8c617%3A0xeb8ced3f7ac558bd!2z0LLRg9C70LjRhtGPINCT0LvQtdCx0L7QstCwLCDQndC-0LLQvtGB0LXQu9C40YbRjywg0KfQtdGA0L3RltCy0LXRhtGM0LrQsCDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDRl9C90LAsIDYwMzAw!5e0!3m2!1suk!2sro!4v1712229814827!5m2!1suk!2sro",
                ImgsUrlFolder = "https://profirealt.blob.core.windows.net/lands/HlebovaAlley",
                PhoneNumber = "+380-96-587-19-54",
                Discription = "Продається земельна ділянка в чудовому мальовничому місці. Перші Новоселицьі дачі. " +
                "Діляночка рівненька, доглянута. Вода від башти Світло на ділянці; Газ поруч; Зручний заїзд з " +
                "центральної дороги"
            },
            new Estate()
            {
                Id = 11,
                City = "Київ",
                EstateAddress = "Лесі Українки бульвар, 13",
                TotalSquare = 80,
                EstateType = Enums.EstateType.Land,
                PriceUah = 600000,
                IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.56769444266!2d30.5355076407809!3d50.43052567935468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0f6f0b8c3b%3A0x7c900d268facc356!2z0LHRg9C70YzQstCw0YAg0JvQtdGB0ZYg0KPQutGA0LDRl9C90LrQuCwgMTMsINCa0LjRl9CyLCDQo9C60YDQsNGX0L3QsCwgMDIwMDA!5e0!3m2!1suk!2sro!4v1712230148070!5m2!1suk!2sro",
                ImgsUrlFolder = "https://profirealt.blob.core.windows.net/lands/LesiUkrainkiAlley13",
                PhoneNumber = "+380-98-317-45-11",
                Discription = "Продаж земельної ділянки сільськогосподарського призначення! Є вода від башні та септик. " +
                "Газ та світло поруч з ділянкою. На ділянці деревʼяний будинок. Частково зроблений паркан. Вулиця обжита. " +
                "Дуже гарне місце та спокійне місце розташування."
            },
            new Estate()
            {
                Id = 12,
                City = "Гостомель",
                EstateAddress = "Остромирська вулиця, 7",
                TotalSquare = 95,
                EstateType = Enums.EstateType.Land,
                PriceUah = 750000,
                IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.8296166013656!2d30.21313027644506!3d50.57453177161618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b31d53781c73d%3A0xf0b1c5ff34c1bced!2z0LLRg9C70LjRhtGPINCe0YHRgtGA0L7QvNC40YDRgdGM0LrQsCwgNywg0JPQvtGB0YLQvtC80LXQu9GMLCDQmtC40ZfQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsCwgMDgyODk!5e0!3m2!1suk!2sro!4v1712230186713!5m2!1suk!2sro",
                ImgsUrlFolder = "https://profirealt.blob.core.windows.net/lands/OstromirskaStreet7",
                PhoneNumber = "+380-95-321-69-66",
                Discription = "Продається земельна ділянка у мальовничому місці біля лісу, чудове місце для будівництва " +
                "будинку своєї мрії! На ділянці підключене світло 16 кВат, газова труба проходить по під ділянку - " +
                "є можливість підключення! Ділянка рівна прямокутна правильної форми. До центру міста 3 хвилини " +
                "автомобілем. Аналогів в місті не знайдете!"
            },

            #endregion land

            #region commerce

            new Estate()
            {
                Id = 13,
                City = "Київ",
                EstateAddress = "Анни Ахматової вулиця, 13",
                TotalSquare = 15,
                EstateType = Enums.EstateType.Commerce,
                PriceUah = 743000,
                IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.803833157774!2d30.63238427643468!3d50.407493371584046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5aa28620637%3A0xf657c9de6580e444!2z0LLRg9C70LjRhtGPINCQ0L3QvdC4INCQ0YXQvNCw0YLQvtCy0L7RlywgMTMsINCa0LjRl9CyLCDQo9C60YDQsNGX0L3QsCwgMDIwMDA!5e0!3m2!1suk!2sro!4v1712219664794!5m2!1suk!2sro",
                ImgsUrlFolder = "https://profirealt.blob.core.windows.net/commerce/AnnaAhmatovoiStreet13",
                PhoneNumber = "+380-97-556-15-41",
                Discription = "Продається паркове місце. По вулиці Васильченка 3. Парко місце під охороною, " +
                "Закрита територія. Один заїзд. 15 КВ метрів. Парк місце знаходиться в кінці паркінгу. "
            },

            new Estate()
            {
                Id = 14,
                City = "Київ",
                EstateAddress = "Берковецька вулиця, 6",
                TotalSquare = 37,
                EstateType = Enums.EstateType.Commerce,
                PriceUah = 408000,
                IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.9999454755944!2d30.35874877644016!3d50.49695877160105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b32cd54d37977%3A0xae0498dab8468d64!2z0LLRg9C70LjRhtGPINCR0LXRgNC60L7QstC10YbRjNC60LAsIDYsINCa0LjRl9CyLCDQo9C60YDQsNGX0L3QsCwgMDIwMDA!5e0!3m2!1suk!2sro!4v1712219827242!5m2!1suk!2sro",
                ImgsUrlFolder = "https://profirealt.blob.core.windows.net/commerce/BerkovetskayaStreet6",
                PhoneNumber = "+380-97-556-15-41",
                Discription = "Продається доглянутий гараж з підвальним приміщенням в гаражному кооперативі \"Троянда\", " +
                "що знаходиться по вулиці Берковецька 6. Територія охороняється, також є відеонагляд. " +
                "Поруч знаходяться житлові комплекси ЖК \"Lalalend\", та ЖК \"Lucy Land\", в " +
                "трьох хвилинах ходьби розташований ТРЦ \"Lavina\""
            },

            new Estate()
            {
                Id = 15,
                City = "Київ",
                EstateAddress = "Данченко Сергія вулиця, 1а",
                TotalSquare = 14,
                EstateType = Enums.EstateType.Commerce,
                PriceUah = 483000,
                IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.519780952712!2d30.537083976436204!3d50.43141827158855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0f2c700001%3A0x2c4f5dbed125502c!2z0LLRg9C70LjRhtGPINCd0LXQvNC40YDQvtCy0LjRh9CwLdCU0LDQvdGH0LXQvdC60LAsIDHQsCwg0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCwLCAwMTAxMQ!5e0!3m2!1suk!2sro!4v1712220047235!5m2!1suk!2sro",
                ImgsUrlFolder = "https://profirealt.blob.core.windows.net/commerce/DanchenkoSerhiyaStreet1a",
                PhoneNumber = "+380-96-346-10-17",
                Discription = "Продається паркомісце в Подільському районі, Липинка. Паркомісце знаходиться у " +
                "багаторівневому паркінгу на третьому відкритому поверсі, біля Крістер Града, ЖК Варшавського та ЖК " +
                "Липинки. Зручне на виїзд та виїзд. Є ліфт та цілодобова охорона. Право власності. Податки сплачуємо " +
                "за себе."
            },

            new Estate()
            {
                Id = 16,
                City = "Київ",
                EstateAddress = "Кропивницького вулиця, 10",
                TotalSquare = 140,
                EstateType = Enums.EstateType.Commerce,
                PriceUah = 9200000,
                IFrameUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.012433289071!2d30.521661376436725!3d50.44086907159036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ceff91801181%3A0xa4fc3e1b39fcd872!2z0LLRg9C70LjRhtGPINCa0YDQvtC_0LjQstC90LjRhtGM0LrQvtCz0L4sIDEwLCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LAsIDAyMDAw!5e0!3m2!1suk!2sro!4v1712220189620!5m2!1suk!2sro",
                ImgsUrlFolder = "https://profirealt.blob.core.windows.net/commerce/KropivnitskogoStreet10",
                PhoneNumber = "+380-97-056-22-87",
                Discription = "Продаж двоповерхового офісного приміщення, загальною площею 140 кв м у центральній частині " +
                "міста за сім хвилин ходьби від станції метро Площа Українських Героїв. Окремий вхід, закрита територія. " +
                "Вхід до офісного приміщення здійснюється з вул. Шовковична, Басейна, Кропивницького. Кабінетна система, " +
                "кухня-їдальня, санвузли на кожному поверсі. Індивідуальне опалення, своя скважина. Є окремий гараж."
            }
            #endregion commerce
            );

            #region reviews
            modelBuilder.Entity<Review>().HasData(
                new Review()
                {
                    Id = 1,
                    Author = "Юлія",
                    Body = "Дуже вдячні компанії Profi Realt за швидку купівлю квартири. Особлива подяка ріелтору Маріанні " +
                    "Макаді та юристу Ользі Івановій. На високому рівні проведення переглядів і комунікації у всіх " +
                    "процесах далі.",
                    Created_At = new DateTime(2024, 02, 20, 19, 34, 38)
                },
                new Review()
                {
                    Id = 2,
                    Author = "Андрій",
                    Body = "Хочу щиро подякувати спеціалістів компанії Юрія Возного і Юнну Бондарчук за чудову роботу " +
                    "і професіоналізм. Був важким продаж квартири і оформлення всіх документів. Але спеціалісти все " +
                    "зробили на високому рівні. Все пройшло без будь - яких ускладнень. Рекомендую всім хто хоче " +
                    "купити / продати нерухомість звертатися до спеціалістів цієї компанії.",
                    Created_At = new DateTime(2024, 02, 15, 22, 8, 24)
                },
                new Review()
                {
                    Id = 3,
                    Author = "Сергій",
                    Body = "Хочу висловити благодарність АН Профі Рієлту, зокрема рієлтору Москаленку Тетяні та юристу " +
                    "Юнні Ігорівні.Дякуємо за професіоналізм,оперативність та високоякісний підхід до своєї справи. " +
                    "Однозначно буду рекомендувати Вас своїм друзям і знайомим і при своїй наступній" +
                    "продажі знову буду звертатися до Вас! ДЯКУЮ!",
                    Created_At = new DateTime(2024, 02, 15, 19, 36, 12)
                },
                new Review()
                {
                    Id = 4,
                    Author = "Світлана",
                    Body = "Від щирого серця хочу подякувати за співпрацю фахівцю з нерухомості Марині Писаренко " +
                    "і юристу Валентині Слюсаренко за виконану роботу.За те, що швидко були проведені консультації " +
                    "по всімважливим питанням.Вони зробили все від початку до кінця чудово.Мені не потрібно було " +
                    "самій ходити і збирати різні довідки і документи.",
                    Created_At = new DateTime(2024, 02, 12, 13, 1, 11)
                },
                new Review()
                {
                    Id = 5,
                    Author = "Ольга",
                    Body = "Хочу подякувати за неймовірну роботу ріелтора Анни Митченко, вже вдруге співпрацюємо з нею, " +
                    "всі поточні питання і ньюанси вона вирішує миттєво без нашого втручання, приємно продавати і здавати " +
                    "квартири з таким професійним підходом! Дякую і до нових зустрічей !",
                    Created_At = new DateTime(2024, 01, 17, 16, 59, 10)
                },
                new Review()
                {
                    Id = 6,
                    Author = "Маргарита",
                    Body = "Дуже дякую агенству і Валентинки особисто, взялись за мою справу хоча вона і здавалась " +
                    "безвихідною, весь час турботливо тримав мене в курсі всіх нюансів та змін, а також терпляче " +
                    "ставився до особливостей моєї особистості, що дуже важливо було особисто для мене, а також " +
                    "вибивав якомога вигідніші умови для мене. Дякую велике)",
                    Created_At = new DateTime(2024, 01, 10, 21, 15, 41)
                },
                new Review()
                {
                    Id = 7,
                    Author = "Світлана",
                    Body = "Дякую ріелтору Тетяні і юристу Юнні! Було приємно працювати з ними. Консультували по " +
                    "всім питанням, допомагали з документами, навіть самі брали деякі довідки. Значно полегшили процесс. " +
                    "Справжні профі!",
                    Created_At = new DateTime(2023, 12, 16, 14, 42, 31)
                },
                new Review()
                {
                    Id = 8,
                    Author = "Ніна",
                    Body = "Неймовірно задоволена співпрацею з ріелтором Писаренко Мариною та юристом Івановою Ольгою! " +
                    "Професіоналізм, увага до деталей та оперативність вражають. Процес купівлі житла став для мене " +
                    "легким та приємним. Рекомендую всім, хто цінує високий рівень сервісу у сфері нерухомості.",
                    Created_At = new DateTime(2023, 12, 24, 15, 49, 51)
                },
                new Review()
                {
                    Id = 9,
                    Author = "Олена",
                    Body = "Вдячні ріелтору Маріанні за підготовку проведення угоди з продажу нашої квартири та " +
                    "обговорення всіх моментів на попередньому договорі. Завдяки цьому основна угода щодо Е-оселя " +
                    "пройшла спокійно. гроші від ПриватБанку було зараховано того ж дня нам на рахунок. Все дуже чітко " +
                    "та оперативно та головне швидко. Реально за 3 дні: оцінка, попередній договір, основний договір " +
                    "та розрахунок! Рекомендую однозначно цю агенцію.",
                    Created_At = new DateTime(2024, 01, 28, 14, 5, 29)
                },
                new Review()
                {
                    Id = 10,
                    Author = "Анатолій",
                    Body = "Щиро вдячний Маріанні, Валентині та Юнні за Вашу допомогу у купівлі квартири. Ваші поради " +
                    "та рекомендації були мені дуже корисними. Ви завжди були на зв`язку та оперативно вирішували " +
                    "всі питання, що виникали.Завдяки Вам я зміг придбати квартиру своєї мрії. Дуже дякую!",
                    Created_At = new DateTime(2024, 02, 09, 16, 24, 5)
                },
                new Review()
                {
                    Id = 11,
                    Author = "Валетина",
                    Body = "Дуже вдячні ріелторам Юрію і Олені, а також юристу Юнні! Все пройшло дуже швидко, ми " +
                    "знайшли «свою» квартиру в перший же день переглядів і вже через пару тижнів отримали ключі " +
                    "на руки!Команда неймовірно професійна, привітна, і готова допомогти.З такими людьми, " +
                    "навіть не найпростіший процес пройшов дуже швидко і легко.В майбутньому, коли буде потреба, " +
                    "обов‘язково звернемося знову.",
                    Created_At = new DateTime(2023, 10, 12, 19, 52, 23)
                },
                new Review()
                {
                    Id = 12,
                    Author = "Артем",
                    Body = "Хочу висловити величезну подяку компанії Profi Realt за допомогу в покупці квартири, " +
                    "а зокрема ріелтору Москаленку Тетяні та юристу Бондарчук Юнні Ігорівні. Повне професійне " +
                    "супроводження від показів до покупки, комфортне спілкування, надання всіх потрібних документів, " +
                    "пунктуальність у часі, а також у всіх тонкощах та ньюансах. При наступній угоді, знову звернуся до " +
                    "цих чудових та професійних фахівців у своїй справі!",
                    Created_At = new DateTime(2023, 10, 11, 13, 31, 55)
                }
            );
            #endregion reviews

            #region complexes

            modelBuilder.Entity<Complex>().HasData(
                new Complex()
                {
                    Id = 1,
                    ImgsUrlFolder = "https://profirealt.blob.core.windows.net/complexes/044",
                    ComplexName = "044",
                    ClassType = Enums.ClassType.Business,
                    Developer = "Kiev Development Group",
                    NumberOfFloors = 9,
                    BuildTechnology = "монолітно-каркасна",
                    HouseCount = 2,
                    CommisionedYear = 2020,
                    CeillingHeight = 2.70,
                    ParkingType = Enums.ParkingType.Closed,
                    Description = "Ідея житлового комплексу 044 у продовженні витіснення промзон з центральних районів " +
                    "столиці: замість складів та фабричних будівель побудують нові житлові будинки. У комплексі 9 " +
                    "поверхів — це висота, яка дозволяє розташувати достатню кількість квартир, але при цьому не " +
                    "«тиснути» на навколишні будинки поверховістю.\r\nКомплекс розташований у тихій частині Подолу, " +
                    "де немає великого скупчення людей та туристів, але все бонуси району залишаються у пішому доступі. " +
                    "Сходити перекусити можна як в популярні мережеві заклади з демократичними цінами та в ресторани з " +
                    "кухнями різних країн світу. На Подолі багато унікальних барів, пабів, кав'ярень та інших закладів," +
                    " заради яких люди з'їжджаються з усього Києва. У 10 хвилинах пішки розташований кінотеатр «Жовтень»."
                },
                new Complex()
                {
                    Id = 2,
                    ImgsUrlFolder = "https://profirealt.blob.core.windows.net/complexes/4U",
                    ComplexName = "4U",
                    ClassType = Enums.ClassType.Comfort,
                    Developer = "Really Building",
                    NumberOfFloors = 27,
                    BuildTechnology = "монолітно-каркасна",
                    HouseCount = 2,
                    CommisionedYear = 2022,
                    CeillingHeight = 2.65,
                    ParkingType = Enums.ParkingType.Opened,
                    Description = "Проект житлового комплексу 4U передбачає будівництво двох 27-поверхових житлових" +
                    " будинків, по дві секції в кожному. Перше, що кидається в очі, — це сучасний зовнішній вигляд: " +
                    "дизайнерська архітектура, комбіновані кольори і матеріали фасаду, панорамне скління і багаторівневі " +
                    "форми. В рамках комплексу також планують побудувати двоповерхову будівлю з комерційними та офісними " +
                    "приміщеннями, що додасть комфорт і зручність майбутнім мешканцям, адже тут відкриють кафе, магазини, " +
                    "аптеку, салон краси або інші корисні заклади."
                },
                new Complex()
                {
                    Id = 3,
                    ImgsUrlFolder = "https://profirealt.blob.core.windows.net/complexes/Agam",
                    ComplexName = "AGAM",
                    ClassType = Enums.ClassType.Comfort,
                    Developer = "СК ЖК AGAM",
                    NumberOfFloors = 10,
                    BuildTechnology = "кірпічна",
                    HouseCount = 4,
                    CommisionedYear = 2020,
                    CeillingHeight = 2.70,
                    ParkingType = Enums.ParkingType.Opened,
                    Description = "Сучасний житловий комплекс «Agam» в Крюковщине розташований на вулиці Василя Стуса " +
                    "неподалік від перетину з вулицею В'ячеслава Чорновола. Новобудова знаходиться поруч з трасою, " +
                    "по якій можна швидко проїхати до Києва. До Кільцевої дороги два з половиною кілометри, станція " +
                    "метро «Теремки» розташована в семи кілометрах. У декількох хвилинах ходьби є зупинка автобуса, " +
                    "на якому можна доїхати до метро «Дружби народів». По сусідству є магазин, супермаркет, три " +
                    "гіпермаркету і аптека. Неподалік розташовані два поштових відділення, банк і СТО. За півкілометра " +
                    "розташована школа і дитячий сад, поблизу є салони краси та кафе. Житловий комплекс «Агам» " +
                    "відноситься до нерухомості категорії «комфорт». Новобудова є чотири будинки заввишки десять поверхів. " +
                    "Будинки споруджуються по цегляній технології із застосуванням в ході будівництва сучасних матеріалів " +
                    "відмінної якості. Роботи ведуться в кілька черг."
                },
                new Complex()
                {
                    Id = 4,
                    ImgsUrlFolder = "https://profirealt.blob.core.windows.net/complexes/ArchHouse",
                    ComplexName = "Arch House",
                    ClassType = Enums.ClassType.Elite,
                    Developer = "Укрбудінвест і Ко",
                    NumberOfFloors = 10,
                    BuildTechnology = "монолітно-каркасна",
                    HouseCount = 1,
                    CommisionedYear = 2014,
                    CeillingHeight = 3,
                    ParkingType = Enums.ParkingType.Closed,
                    Description = "Житловий комплекс \"ARCH House\" - це розкіш, стиль і комфорт в самому серці столиці. " +
                    "Будинок буквально оточують найкращі історичні пам'ятки, а сам він виконаний в кращих традиціях " +
                    "історичної місцевості з використанням інноваційних технологій. Квартири преміум класу вдало " +
                    "підкреслять Ваш статус, а завдяки наявності цілодобового сервісу, Ви ніколи не відчуєте проблем. " +
                    "Ваші друзі зможуть розташується в холі комплексу і випити чашечку кави в очікуванні господарів. " +
                    "Так само територія комплексу охороняється. Опера, Ботанічний сад, Володимирський собор, Золоті ворота."
                },
                new Complex()
                {
                    Id = 5,
                    ImgsUrlFolder = "https://profirealt.blob.core.windows.net/complexes/ArtMisto",
                    ComplexName = "Art Misto",
                    ClassType = Enums.ClassType.Comfort,
                    Developer = "Ukrainian Development Company",
                    NumberOfFloors = 4,
                    BuildTechnology = "кірпічна",
                    HouseCount = 11,
                    CommisionedYear = 2022,
                    CeillingHeight = 2.70,
                    ParkingType = Enums.ParkingType.Opened,
                    Description = "Art Misto — малоповерховий житловий комплекс у передмісті столиці. Містечко " +
                    "складається з десяти 4-поверхових будинків, об'єднаних архітектурною ідеєю та загальною концепцією. " +
                    "Для кожного будинку використаний яскравий відтінок, який контрастує з основним білим кольором фасадів." +
                    " Периметральна забудова утворює закритий внутрішній простір, де зможуть безпечно грати діти та " +
                    "відпочивати дорослі. Для малюків забудовник встановить сучасне ігрове містечко, для дорослих — " +
                    "облаштує зелені куточки з зручними лавками. Із зовнішнього боку містечка буде відкрита стоянка " +
                    "для автомобілів мешканців та гостей комплексу."
                },
                new Complex()
                {
                    Id = 6,
                    ImgsUrlFolder = "https://profirealt.blob.core.windows.net/complexes/7Kvartal",
                    ComplexName = "7 Kvartal",
                    ClassType = Enums.ClassType.Elite,
                    Developer = "Perfect Group",
                    NumberOfFloors = 16,
                    BuildTechnology = "монолітно-каркасна",
                    HouseCount = 3,
                    CommisionedYear = 2023,
                    CeillingHeight = 2.70,
                    ParkingType = Enums.ParkingType.Opened,
                    Description = "Житловий комплекс «Сьомий Квартал» будують в Подільському районі Києва, в масиві " +
                    "Виноградар, на проспекті Правди. У 10-15 хвилинах їзди автомобілем від новобудови розташовані " +
                    "відразу три станції київського метрополітену: «Сирець» на зеленій гілці, «Нивки» та «Святошин» ー " +
                    "на червоній. Також майбутні мешканці оцінять близькість комплексу до лісопаркової зони, що забезпечить " +
                    "їм не тільки свіже повітря, але і приємні місця для прогулянок. Власна інфраструктура комплексу " +
                    "передбачає наявність стоянки для автомобілів резидентів і їх гостей, а також впорядковану територію. " +
                    "На ній облаштують зони відпочинку і встановлять дитячі ігрові майданчики."
                },
                new Complex()
                {
                    Id = 7,
                    ImgsUrlFolder = "https://profirealt.blob.core.windows.net/complexes/4Seasons",
                    ComplexName = "4-Сезона",
                    ClassType = Enums.ClassType.Comfort,
                    Developer = "УМК",
                    NumberOfFloors = 25,
                    BuildTechnology = "монолітно-каркасна",
                    HouseCount = 4,
                    CommisionedYear = 2023,
                    CeillingHeight = 2.70,
                    ParkingType = Enums.ParkingType.Closed,
                    Description = "Житловий комплекс 4 сезони у Києві – це сучасна монолітно-каркасна новобудова, " +
                    "представлена двома секціями висотою 23 – 25 поверхів від забудовника УМК. Генеральний план включає " +
                    "наявність 1 – 3-кімнатних квартир, а також двоповерхових апартаментів з вільними планувальними " +
                    "рішеннями. Будинки підключені до централізованих систем тепло- та електропостачання, підведена вода і " +
                    "каналізація. Також забудовник гарантує проведення комунікацій – телефонного зв’язку, ТБ, радіо. " +
                    "В новобудовах працюватиме пожежна сигналізація. Продаж квартир в ЖК 4 сезони на вул. Трутенко, 3г " +
                    "ведеться на умовах від компанії-забудовника. На внутрішній території ЖК Чотири сезони планується " +
                    "комплексне оснащення – тут будуть висаджені дерева та кущі, квітники, встановлено ігровий майданчик, " +
                    "продумано зону для відпочинку. В усіх під’їздах функціонуватимуть швидкісні ліфти."
                },
                new Complex()
                {
                    Id = 8,
                    ImgsUrlFolder = "https://profirealt.blob.core.windows.net/complexes/38Perlina",
                    ComplexName = "38 Перлина",
                    ClassType = Enums.ClassType.Business,
                    Developer = "Kadorr Group",
                    NumberOfFloors = 22,
                    BuildTechnology = "монолітно-каркасна",
                    HouseCount = 1,
                    CommisionedYear = 2019,
                    CeillingHeight = 3,
                    ParkingType = Enums.ParkingType.Closed,
                    Description = "Величний житловий комплекс «Тридцять восьма перлина» в Києві розташований за " +
                    "адресою вул. Жилянська, 68, Голосіївський район. З його вікон з панорамним склінням відкривається " +
                    "прекрасний вид на центр української столиці. По сусідству з новобудовою розташовані загальноосвітні " +
                    "установи, дитячий сад, інститут, кілька торгових центрів. Ботанічний сад імені Фоміна знаходиться " +
                    "в вісімсот метрах, до станції метро «Університет» трохи більше одного кілометра. Поруч зупиняються " +
                    "автобуси, тролейбуси і маршрутні таксі. «38 перлина» - житловий комплекс бізнес-класу висотою " +
                    "двадцять п'ять поверхів, в ході будівництва якого застосовуються сучасні матеріали неперевершеної " +
                    "якості та передові технології, що дозволяють створити справжній витвір мистецтва."
                }
            );
            #endregion complexes
        }
    }
}
