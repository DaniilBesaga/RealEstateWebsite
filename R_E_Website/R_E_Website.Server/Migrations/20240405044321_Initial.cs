using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace R_E_Website.Server.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateSequence(
                name: "EstateSequence");

            migrationBuilder.CreateTable(
                name: "Complexes",
                columns: table => new
                {
                    complex_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    complex_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    imgs_url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    class_type = table.Column<int>(type: "int", nullable: false),
                    developer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    number_of_floors = table.Column<int>(type: "int", nullable: false),
                    build_tech = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    houses_count = table.Column<int>(type: "int", nullable: false),
                    commisioned_year = table.Column<int>(type: "int", nullable: false),
                    ceilling_height = table.Column<double>(type: "float", nullable: false),
                    parking_type = table.Column<int>(type: "int", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Complexes", x => x.complex_id);
                });

            migrationBuilder.CreateTable(
                name: "Estate",
                columns: table => new
                {
                    estate_id = table.Column<int>(type: "int", nullable: false, defaultValueSql: "NEXT VALUE FOR [EstateSequence]"),
                    estate_type = table.Column<int>(type: "int", nullable: false),
                    imgsUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    city = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    complexName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    complexUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    district = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    estate_address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    totalSquare = table.Column<int>(type: "int", nullable: true),
                    livingSquare = table.Column<int>(type: "int", nullable: true),
                    kitchenSquare = table.Column<int>(type: "int", nullable: false),
                    roomCount = table.Column<int>(type: "int", nullable: true),
                    floorsNumber = table.Column<int>(type: "int", nullable: true),
                    estate_floor = table.Column<int>(type: "int", nullable: true),
                    price_uah = table.Column<int>(type: "int", nullable: false),
                    houseSeria = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    houseArea = table.Column<int>(type: "int", nullable: true),
                    houseMaterial = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    discriptiion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    iframeUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    phonenumber = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estate", x => x.estate_id);
                });

            migrationBuilder.CreateTable(
                name: "Newsletters",
                columns: table => new
                {
                    newsletter_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    estateTypes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    roomsCountFrom = table.Column<int>(type: "int", nullable: true),
                    roomsCountTo = table.Column<int>(type: "int", nullable: true),
                    totalSquareFrom = table.Column<int>(type: "int", nullable: true),
                    totalSquareTo = table.Column<int>(type: "int", nullable: true),
                    priceRangeFrom = table.Column<int>(type: "int", nullable: true),
                    priceRangeTo = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Newsletters", x => x.newsletter_id);
                });

            migrationBuilder.CreateTable(
                name: "Requests",
                columns: table => new
                {
                    request_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    add_info = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Requests", x => x.request_id);
                });

            migrationBuilder.CreateTable(
                name: "Reviews",
                columns: table => new
                {
                    review_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    body = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    author = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    created_at = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reviews", x => x.review_id);
                });

            migrationBuilder.CreateTable(
                name: "ClientsInfo",
                columns: table => new
                {
                    client_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    client_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    client_email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    client_phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    request_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientsInfo", x => x.client_id);
                    table.ForeignKey(
                        name: "FK_ClientsInfo_Requests_request_id",
                        column: x => x.request_id,
                        principalTable: "Requests",
                        principalColumn: "request_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RequestEstate",
                columns: table => new
                {
                    estate_id = table.Column<int>(type: "int", nullable: false, defaultValueSql: "NEXT VALUE FOR [EstateSequence]"),
                    estate_type = table.Column<int>(type: "int", nullable: false),
                    imgsUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    city = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    complexName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    complexUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    district = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    estate_address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    totalSquare = table.Column<int>(type: "int", nullable: true),
                    livingSquare = table.Column<int>(type: "int", nullable: true),
                    kitchenSquare = table.Column<int>(type: "int", nullable: false),
                    roomCount = table.Column<int>(type: "int", nullable: true),
                    floorsNumber = table.Column<int>(type: "int", nullable: true),
                    estate_floor = table.Column<int>(type: "int", nullable: true),
                    price_uah = table.Column<int>(type: "int", nullable: false),
                    houseSeria = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    houseArea = table.Column<int>(type: "int", nullable: true),
                    houseMaterial = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    discriptiion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    iframeUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    phonenumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    request_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RequestEstate", x => x.estate_id);
                    table.ForeignKey(
                        name: "FK_RequestEstate_Requests_request_id",
                        column: x => x.request_id,
                        principalTable: "Requests",
                        principalColumn: "request_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Complexes",
                columns: new[] { "complex_id", "build_tech", "ceilling_height", "class_type", "commisioned_year", "complex_name", "description", "developer", "houses_count", "imgs_url", "number_of_floors", "parking_type" },
                values: new object[,]
                {
                    { 1, "монолітно-каркасна", 2.7000000000000002, 1, 2020, "044", "Ідея житлового комплексу 044 у продовженні витіснення промзон з центральних районів столиці: замість складів та фабричних будівель побудують нові житлові будинки. У комплексі 9 поверхів — це висота, яка дозволяє розташувати достатню кількість квартир, але при цьому не «тиснути» на навколишні будинки поверховістю.\r\nКомплекс розташований у тихій частині Подолу, де немає великого скупчення людей та туристів, але все бонуси району залишаються у пішому доступі. Сходити перекусити можна як в популярні мережеві заклади з демократичними цінами та в ресторани з кухнями різних країн світу. На Подолі багато унікальних барів, пабів, кав'ярень та інших закладів, заради яких люди з'їжджаються з усього Києва. У 10 хвилинах пішки розташований кінотеатр «Жовтень».", "Kiev Development Group", 2, "https://profirealt.blob.core.windows.net/complexes/044", 9, 1 },
                    { 2, "монолітно-каркасна", 2.6499999999999999, 0, 2022, "4U", "Проект житлового комплексу 4U передбачає будівництво двох 27-поверхових житлових будинків, по дві секції в кожному. Перше, що кидається в очі, — це сучасний зовнішній вигляд: дизайнерська архітектура, комбіновані кольори і матеріали фасаду, панорамне скління і багаторівневі форми. В рамках комплексу також планують побудувати двоповерхову будівлю з комерційними та офісними приміщеннями, що додасть комфорт і зручність майбутнім мешканцям, адже тут відкриють кафе, магазини, аптеку, салон краси або інші корисні заклади.", "Really Building", 2, "https://profirealt.blob.core.windows.net/complexes/4U", 27, 0 },
                    { 3, "кірпічна", 2.7000000000000002, 0, 2020, "AGAM", "Сучасний житловий комплекс «Agam» в Крюковщине розташований на вулиці Василя Стуса неподалік від перетину з вулицею В'ячеслава Чорновола. Новобудова знаходиться поруч з трасою, по якій можна швидко проїхати до Києва. До Кільцевої дороги два з половиною кілометри, станція метро «Теремки» розташована в семи кілометрах. У декількох хвилинах ходьби є зупинка автобуса, на якому можна доїхати до метро «Дружби народів». По сусідству є магазин, супермаркет, три гіпермаркету і аптека. Неподалік розташовані два поштових відділення, банк і СТО. За півкілометра розташована школа і дитячий сад, поблизу є салони краси та кафе. Житловий комплекс «Агам» відноситься до нерухомості категорії «комфорт». Новобудова є чотири будинки заввишки десять поверхів. Будинки споруджуються по цегляній технології із застосуванням в ході будівництва сучасних матеріалів відмінної якості. Роботи ведуться в кілька черг.", "СК ЖК AGAM", 4, "https://profirealt.blob.core.windows.net/complexes/Agam", 10, 0 },
                    { 4, "монолітно-каркасна", 3.0, 2, 2014, "Arch House", "Житловий комплекс \"ARCH House\" - це розкіш, стиль і комфорт в самому серці столиці. Будинок буквально оточують найкращі історичні пам'ятки, а сам він виконаний в кращих традиціях історичної місцевості з використанням інноваційних технологій. Квартири преміум класу вдало підкреслять Ваш статус, а завдяки наявності цілодобового сервісу, Ви ніколи не відчуєте проблем. Ваші друзі зможуть розташується в холі комплексу і випити чашечку кави в очікуванні господарів. Так само територія комплексу охороняється. Опера, Ботанічний сад, Володимирський собор, Золоті ворота.", "Укрбудінвест і Ко", 1, "https://profirealt.blob.core.windows.net/complexes/ArchHouse", 10, 1 },
                    { 5, "кірпічна", 2.7000000000000002, 0, 2022, "Art Misto", "Art Misto — малоповерховий житловий комплекс у передмісті столиці. Містечко складається з десяти 4-поверхових будинків, об'єднаних архітектурною ідеєю та загальною концепцією. Для кожного будинку використаний яскравий відтінок, який контрастує з основним білим кольором фасадів. Периметральна забудова утворює закритий внутрішній простір, де зможуть безпечно грати діти та відпочивати дорослі. Для малюків забудовник встановить сучасне ігрове містечко, для дорослих — облаштує зелені куточки з зручними лавками. Із зовнішнього боку містечка буде відкрита стоянка для автомобілів мешканців та гостей комплексу.", "Ukrainian Development Company", 11, "https://profirealt.blob.core.windows.net/complexes/ArtMisto", 4, 0 },
                    { 6, "монолітно-каркасна", 2.7000000000000002, 2, 2023, "7 Kvartal", "Житловий комплекс «Сьомий Квартал» будують в Подільському районі Києва, в масиві Виноградар, на проспекті Правди. У 10-15 хвилинах їзди автомобілем від новобудови розташовані відразу три станції київського метрополітену: «Сирець» на зеленій гілці, «Нивки» та «Святошин» ー на червоній. Також майбутні мешканці оцінять близькість комплексу до лісопаркової зони, що забезпечить їм не тільки свіже повітря, але і приємні місця для прогулянок. Власна інфраструктура комплексу передбачає наявність стоянки для автомобілів резидентів і їх гостей, а також впорядковану територію. На ній облаштують зони відпочинку і встановлять дитячі ігрові майданчики.", "Perfect Group", 3, "https://profirealt.blob.core.windows.net/complexes/7Kvartal", 16, 0 },
                    { 7, "монолітно-каркасна", 2.7000000000000002, 0, 2023, "4-Сезона", "Житловий комплекс 4 сезони у Києві – це сучасна монолітно-каркасна новобудова, представлена двома секціями висотою 23 – 25 поверхів від забудовника УМК. Генеральний план включає наявність 1 – 3-кімнатних квартир, а також двоповерхових апартаментів з вільними планувальними рішеннями. Будинки підключені до централізованих систем тепло- та електропостачання, підведена вода і каналізація. Також забудовник гарантує проведення комунікацій – телефонного зв’язку, ТБ, радіо. В новобудовах працюватиме пожежна сигналізація. Продаж квартир в ЖК 4 сезони на вул. Трутенко, 3г ведеться на умовах від компанії-забудовника. На внутрішній території ЖК Чотири сезони планується комплексне оснащення – тут будуть висаджені дерева та кущі, квітники, встановлено ігровий майданчик, продумано зону для відпочинку. В усіх під’їздах функціонуватимуть швидкісні ліфти.", "УМК", 4, "https://profirealt.blob.core.windows.net/complexes/4Seasons", 25, 1 },
                    { 8, "монолітно-каркасна", 3.0, 1, 2019, "38 Перлина", "Величний житловий комплекс «Тридцять восьма перлина» в Києві розташований за адресою вул. Жилянська, 68, Голосіївський район. З його вікон з панорамним склінням відкривається прекрасний вид на центр української столиці. По сусідству з новобудовою розташовані загальноосвітні установи, дитячий сад, інститут, кілька торгових центрів. Ботанічний сад імені Фоміна знаходиться в вісімсот метрах, до станції метро «Університет» трохи більше одного кілометра. Поруч зупиняються автобуси, тролейбуси і маршрутні таксі. «38 перлина» - житловий комплекс бізнес-класу висотою двадцять п'ять поверхів, в ході будівництва якого застосовуються сучасні матеріали неперевершеної якості та передові технології, що дозволяють створити справжній витвір мистецтва.", "Kadorr Group", 1, "https://profirealt.blob.core.windows.net/complexes/38Perlina", 22, 1 }
                });

            migrationBuilder.InsertData(
                table: "Estate",
                columns: new[] { "estate_id", "city", "complexName", "complexUrl", "discriptiion", "district", "estate_address", "estate_floor", "estate_type", "houseArea", "houseMaterial", "houseSeria", "iframeUrl", "imgsUrl", "kitchenSquare", "livingSquare", "floorsNumber", "phonenumber", "price_uah", "roomCount", "totalSquare" },
                values: new object[,]
                {
                    { 1, "Київ", "044", "/", "Затишна квартира на 1 кімнату у місті Київ, район Подільський, знаходиться на 5 поверсі. Площа становить 58 м2.Просторна кухня-вітальня оснащена необхідною вбудованою побутовою технікою та меблями високої якості. На підлогах ламінат та кахель. У просторому санвузлі ванна, раковина, унітаз, пральна машина. Житловий комплекс із системою відеоспостереження та охороною по периметру. На території дитячі майданчики, тренажери, поряд каскад озер та паркова зона. ", "Подільський", "Данченка Сергія вулиця, 5", 5, 0, null, null, "Спецпроект/Совмін", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.867111593259!2d30.424891776440422!3d50.49943097160157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd7142742e6b%3A0x55aeef587a2cd137!2z0LLRg9C7LiDQodC10YDQs9GW0Y8g0JTQsNC90YfQtdC90LrQsCwgNSwg0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCwLCAwMjAwMA!5e0!3m2!1suk!2sro!4v1712213584322!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/flats/DanchenkaSerhiyaAvenue5", 21, 17, 12, "+380-98-056-45-92", 2220000, 1, 58 },
                    { 2, "Київ", "4U", "/", "Чудова двокімнатна квартира в самому центрі Києва, вражає своєю просторістю та затишком. Загальна площа складає 75 м2, з просторою вітальнею та вбудоваою кухнею. В квартирі є все необхідне для комфортного проживання. Для майбутніх мешканців є підземний паркінг та парковочні місця біля будинку.", "Голосіївський", "Голосіївська вулиця, 84", 20, 0, null, null, "Спецпроект/Новобуд", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.3127500478186!2d30.50965707643425!3d50.39800877158229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8caeb3f2005%3A0xba19ac7ee3157eec!2z0LLRg9C70LjRhtGPINCT0L7Qu9C-0YHRltGX0LLRgdGM0LrQsCwgODQsINCa0LjRl9CyLCDQo9C60YDQsNGX0L3QsCwgMDMwMzk!5e0!3m2!1suk!2sro!4v1712214807653!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/flats/HolosievkiyAvenue84", 25, 22, 27, "+380-98-156-43-92", 2500000, 2, 65 },
                    { 3, "Київ", "Bristol", "/", "Елітна трьохкімнатна квартира з видом на море в інноваційному житловому центрі Одеси. Площа квартири 120 м2, велика вітальня, окрема кухня з виходом на балкон, дві спальні та два санвузли. Житловий комплекс має власний парк і дитячий сад, а також власну інфраструктуру. Для мешканців парковка, охорона та консьєрж-сервіс.", "Подільський", "Правди проспект, 49", 3, 0, null, null, "Спецпроект/Совмін", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.562696674374!2d30.446142476440812!3d50.505096171602645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd81c10010a9%3A0xec2be2e87c8f8c50!2z0L_RgNC-0YHQv9C10LrRgiDQn9GA0LDQstC00LgsIDUsINCa0LjRl9CyLCDQo9C60YDQsNGX0L3QsCwgMDIwMDA!5e0!3m2!1suk!2sro!4v1712217032809!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/flats/PravduAvenue49", 41, 55, 15, "+380-97-036-13-22", 3000000, 3, 120 },
                    { 4, "Київ", "Arch House", "/", "Простора квартира з чотирма спальнями в новобудові з закритою територією, дитячим майданчиком та парковкою. Квартира з якісним ремонтом, повністю укомплектована меблями і технікою. Сучасне планування з кухнею-вітальнею, три санвузли, вбудована кухня, балкон з чудовим краєвидом. У дворі є місце для парковки авто, ліфт та дитячий майданчик.", "Позняки", "Ревутського вулиця, 40В", 5, 0, null, null, "Спецпроект/Новобуд", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.045422568074!2d30.646904176434465!3d50.40299107158327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5433bd651e7%3A0x6d219c38a3f1d88b!2z0LLRg9C70LjRhtGPINCg0LXQstGD0YbRjNC60L7Qs9C-LCA0MNCSLCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LAsIDAyMDY4!5e0!3m2!1suk!2sro!4v1712217212097!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/flats/RevutskogoAvenue40B", 41, 78, 12, "+380-98-056-45-92", 3500000, 1, 130 },
                    { 5, "Бровари", null, null, "4-х кімнатний, двоповерховий будинок із профільного бруса, з лазнею та сонячною електростанцією, загальною площею 208м. У Броварах.\r\n10 соток землі\r\nНавіс під автомобілі\r\nДистанційні ворота\r\nВода – свердловина 50 м\r\nГаз\r\nКаналізація - двокамерний септик\r\nЕлектрика - централізована 15 кВт та сонячна Електростанція на 10 кВт з оформленим зеленим тарифом та чистим прибутком 500-600 дол\r\nСигналізація по периметру\r\nГазон з автополивом\r\nТри котли - газовий, електро та твердопаливний", null, "Ірпінська вулиця, 40", null, 1, 10, "Брус", null, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.0843706060673!2d30.771124976440102!3d50.49538747160081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4dbda9121c535%3A0x8ba7d1c01879f680!2z0LLRg9C70LjRhtGPINCG0YDQv9GW0L3RgdGM0LrQsCwgNDAsINCR0YDQvtCy0LDRgNC4LCDQmtC40ZfQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsCwgMDc0MDI!5e0!3m2!1suk!2sro!4v1712218051006!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/houses/IrpinskaStreet40", 41, 78, 2, "+380-95-126-33-12", 13000000, 4, 208 },
                    { 6, "Київ", null, null, "Двоповерховий будинок. Скважина - 60м.п. підведено в будинок, її при ямок можливо використовувати, як погріб.лектрика 32 кВт розведена по будинку і частково на другому поверсі + зроблене заземлення. В будинок кабель заходить під землею.\r\nТеплі водяні поли з ел.котлем Bosh 24 кВт\r\nВ будинку на першому поверсі чистова стяжка, на другому дерев'яне перекриття.\r\nЧастково присутня штукатурка.", null, "Польова вулиця, 7", null, 1, 25, "Газоблок", null, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.2573326057877!2d30.58722827644112!3d50.510778571603694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d1a631655ca3%3A0x3d415faa4a6c3810!2z0LLRg9C70LjRhtGPINCf0L7Qu9GM0L7QstCwLCA3LCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LAsIDAyMDAw!5e0!3m2!1suk!2sro!4v1712218225594!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/houses/PoljovaStreet7", 35, 110, 2, "+380-98-036-34-52", 5500000, 6, 180 },
                    { 7, "Славгород", null, null, "Опалення - газовий двоконтурний котел, оплата за лічильником, також на будинок заведено 2 фази по 16 кВт електроенергії, встановлений лічильник День - Ніч, прямий договір з ДТЕК. Стіни - цегла(380 мм) + утеплення(60 мм).Зовні - кароїд + фарбування. Дах - бітумна черепиця. У будинку встановлено справжній камін", null, "Шевченко вулиця, 20", null, 1, 6, "Цегла", null, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.504179227309!2d35.515739276295236!3d48.10050907123939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc1636c45c1837%3A0x6bb6266408593de5!2z0LLRg9C70LjRhtGPINCo0LXQstGH0LXQvdC60L4sIDIwLCDQodC70LDQstCz0L7RgNC-0LQsINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsCwgNTI1ODE!5e0!3m2!1suk!2sro!4v1712219240040!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/houses/SchevchenkoStreet20", 15, 100, 2, "+380-95-156-13-72", 6000000, 5, 141 },
                    { 8, "Миргород", null, null, "Будинок деревяний але обкладений цеглою, у будинку, газові конвектори, грубка для альтернативного опалення будинку, встановлено металопластикові вікна. Також є топоміжні примішення, літня кухня та господарська споруда, а також погріб для зберігання продуктів. Ділянка розташована у зручному місці, поруч школа, садок, магазини і транспортна зупинка.", null, "Троїцька вулиця, 10", null, 1, 20, "Цегла", null, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.928304923976!2d33.608432776408264!3d49.97520307150526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d7b36b78ecb113%3A0xf373724f4667200!2z0KLRgNC-0ZfRhtGM0LrQsCDQstGD0LvQuNGG0Y8sIDEwLCDQnNC40YDQs9C-0YDQvtC0LCDQn9C-0LvRgtCw0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDRl9C90LAsIDM3NjAw!5e0!3m2!1suk!2sro!4v1712219390838!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/houses/TroitskaStreet10", 6, 23, 1, "+380-99-346-03-02", 1300000, 2, 50 },
                    { 9, "Виноградів", null, null, "Продається земельна ділянка під будівництво будинку. Площа 11 соток, р-н геріатричного пансіонату, \"Школярка\") Комунікації на ділянці відсутні (електрика, газ підведені поруч із ділянкою) Прекрасне розташування. Поруч збудовані будинки", null, "Черешнева, 38", null, 2, null, null, null, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.133083235615!2d23.02698667629793!3d48.14623947124443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47383a6bf94f9bf5%3A0xa82c66cba6bb5f2a!2z0LLRg9C70LjRhtGPINCn0LXRgNC10YjQvdC10LLQsCwgMzgsINCS0LjQvdC-0LPRgNCw0LTRltCyLCDQl9Cw0LrQsNGA0L_QsNGC0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0ZfQvdCwLCA5MDMwMA!5e0!3m2!1suk!2sro!4v1712229626396!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/lands/Chereshnevaya38", 0, null, null, "+380-96-566-11-04", 1370000, null, 100 },
                    { 10, "Новоселиця", null, null, "Продається земельна ділянка в чудовому мальовничому місці. Перші Новоселицьі дачі. Діляночка рівненька, доглянута. Вода від башти Світло на ділянці; Газ поруч; Зручний заїзд з центральної дороги", null, "вулиця Глебова", null, 2, null, null, null, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.984300952943!2d26.26985727630265!3d48.2261768712533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734768081c8c617%3A0xeb8ced3f7ac558bd!2z0LLRg9C70LjRhtGPINCT0LvQtdCx0L7QstCwLCDQndC-0LLQvtGB0LXQu9C40YbRjywg0KfQtdGA0L3RltCy0LXRhtGM0LrQsCDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDRl9C90LAsIDYwMzAw!5e0!3m2!1suk!2sro!4v1712229814827!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/lands/HlebovaAlley", 0, null, null, "+380-96-587-19-54", 1300000, null, 90 },
                    { 11, "Київ", null, null, "Продаж земельної ділянки сільськогосподарського призначення! Є вода від башні та септик. Газ та світло поруч з ділянкою. На ділянці деревʼяний будинок. Частково зроблений паркан. Вулиця обжита. Дуже гарне місце та спокійне місце розташування.", null, "Лесі Українки бульвар, 13", null, 2, null, null, null, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.56769444266!2d30.5355076407809!3d50.43052567935468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0f6f0b8c3b%3A0x7c900d268facc356!2z0LHRg9C70YzQstCw0YAg0JvQtdGB0ZYg0KPQutGA0LDRl9C90LrQuCwgMTMsINCa0LjRl9CyLCDQo9C60YDQsNGX0L3QsCwgMDIwMDA!5e0!3m2!1suk!2sro!4v1712230148070!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/lands/LesiUkrainkiAlley13", 0, null, null, "+380-98-317-45-11", 600000, null, 80 },
                    { 12, "Гостомель", null, null, "Продається земельна ділянка у мальовничому місці біля лісу, чудове місце для будівництва будинку своєї мрії! На ділянці підключене світло 16 кВат, газова труба проходить по під ділянку - є можливість підключення! Ділянка рівна прямокутна правильної форми. До центру міста 3 хвилини автомобілем. Аналогів в місті не знайдете!", null, "Остромирська вулиця, 7", null, 2, null, null, null, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.8296166013656!2d30.21313027644506!3d50.57453177161618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b31d53781c73d%3A0xf0b1c5ff34c1bced!2z0LLRg9C70LjRhtGPINCe0YHRgtGA0L7QvNC40YDRgdGM0LrQsCwgNywg0JPQvtGB0YLQvtC80LXQu9GMLCDQmtC40ZfQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsCwgMDgyODk!5e0!3m2!1suk!2sro!4v1712230186713!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/lands/OstromirskaStreet7", 0, null, null, "+380-95-321-69-66", 750000, null, 95 },
                    { 13, "Київ", null, null, "Продається паркове місце. По вулиці Васильченка 3. Парко місце під охороною, Закрита територія. Один заїзд. 15 КВ метрів. Парк місце знаходиться в кінці паркінгу. ", null, "Анни Ахматової вулиця, 13", null, 3, null, null, null, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.803833157774!2d30.63238427643468!3d50.407493371584046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5aa28620637%3A0xf657c9de6580e444!2z0LLRg9C70LjRhtGPINCQ0L3QvdC4INCQ0YXQvNCw0YLQvtCy0L7RlywgMTMsINCa0LjRl9CyLCDQo9C60YDQsNGX0L3QsCwgMDIwMDA!5e0!3m2!1suk!2sro!4v1712219664794!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/commerce/AnnaAhmatovoiStreet13", 0, null, null, "+380-97-556-15-41", 743000, null, 15 },
                    { 14, "Київ", null, null, "Продається доглянутий гараж з підвальним приміщенням в гаражному кооперативі \"Троянда\", що знаходиться по вулиці Берковецька 6. Територія охороняється, також є відеонагляд. Поруч знаходяться житлові комплекси ЖК \"Lalalend\", та ЖК \"Lucy Land\", в трьох хвилинах ходьби розташований ТРЦ \"Lavina\"", null, "Берковецька вулиця, 6", null, 3, null, null, null, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.9999454755944!2d30.35874877644016!3d50.49695877160105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b32cd54d37977%3A0xae0498dab8468d64!2z0LLRg9C70LjRhtGPINCR0LXRgNC60L7QstC10YbRjNC60LAsIDYsINCa0LjRl9CyLCDQo9C60YDQsNGX0L3QsCwgMDIwMDA!5e0!3m2!1suk!2sro!4v1712219827242!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/commerce/BerkovetskayaStreet6", 0, null, null, "+380-97-556-15-41", 408000, null, 37 },
                    { 15, "Київ", null, null, "Продається паркомісце в Подільському районі, Липинка. Паркомісце знаходиться у багаторівневому паркінгу на третьому відкритому поверсі, біля Крістер Града, ЖК Варшавського та ЖК Липинки. Зручне на виїзд та виїзд. Є ліфт та цілодобова охорона. Право власності. Податки сплачуємо за себе.", null, "Данченко Сергія вулиця, 1а", null, 3, null, null, null, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.519780952712!2d30.537083976436204!3d50.43141827158855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0f2c700001%3A0x2c4f5dbed125502c!2z0LLRg9C70LjRhtGPINCd0LXQvNC40YDQvtCy0LjRh9CwLdCU0LDQvdGH0LXQvdC60LAsIDHQsCwg0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCwLCAwMTAxMQ!5e0!3m2!1suk!2sro!4v1712220047235!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/commerce/DanchenkoSerhiyaStreet1a", 0, null, null, "+380-96-346-10-17", 483000, null, 14 },
                    { 16, "Київ", null, null, "Продаж двоповерхового офісного приміщення, загальною площею 140 кв м у центральній частині міста за сім хвилин ходьби від станції метро Площа Українських Героїв. Окремий вхід, закрита територія. Вхід до офісного приміщення здійснюється з вул. Шовковична, Басейна, Кропивницького. Кабінетна система, кухня-їдальня, санвузли на кожному поверсі. Індивідуальне опалення, своя скважина. Є окремий гараж.", null, "Кропивницького вулиця, 10", null, 3, null, null, null, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.012433289071!2d30.521661376436725!3d50.44086907159036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ceff91801181%3A0xa4fc3e1b39fcd872!2z0LLRg9C70LjRhtGPINCa0YDQvtC_0LjQstC90LjRhtGM0LrQvtCz0L4sIDEwLCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LAsIDAyMDAw!5e0!3m2!1suk!2sro!4v1712220189620!5m2!1suk!2sro", "https://profirealt.blob.core.windows.net/commerce/KropivnitskogoStreet10", 0, null, null, "+380-97-056-22-87", 9200000, null, 140 }
                });

            migrationBuilder.InsertData(
                table: "Reviews",
                columns: new[] { "review_id", "author", "body", "created_at" },
                values: new object[,]
                {
                    { 1, "Юлія", "Дуже вдячні компанії Profi Realt за швидку купівлю квартири. Особлива подяка ріелтору Маріанні Макаді та юристу Ользі Івановій. На високому рівні проведення переглядів і комунікації у всіх процесах далі.", new DateTime(2024, 2, 20, 19, 34, 38, 0, DateTimeKind.Unspecified) },
                    { 2, "Андрій", "Хочу щиро подякувати спеціалістів компанії Юрія Возного і Юнну Бондарчук за чудову роботу і професіоналізм. Був важким продаж квартири і оформлення всіх документів. Але спеціалісти все зробили на високому рівні. Все пройшло без будь - яких ускладнень. Рекомендую всім хто хоче купити / продати нерухомість звертатися до спеціалістів цієї компанії.", new DateTime(2024, 2, 15, 22, 8, 24, 0, DateTimeKind.Unspecified) },
                    { 3, "Сергій", "Хочу висловити благодарність АН Профі Рієлту, зокрема рієлтору Москаленку Тетяні та юристу Юнні Ігорівні.Дякуємо за професіоналізм,оперативність та високоякісний підхід до своєї справи. Однозначно буду рекомендувати Вас своїм друзям і знайомим і при своїй наступнійпродажі знову буду звертатися до Вас! ДЯКУЮ!", new DateTime(2024, 2, 15, 19, 36, 12, 0, DateTimeKind.Unspecified) },
                    { 4, "Світлана", "Від щирого серця хочу подякувати за співпрацю фахівцю з нерухомості Марині Писаренко і юристу Валентині Слюсаренко за виконану роботу.За те, що швидко були проведені консультації по всімважливим питанням.Вони зробили все від початку до кінця чудово.Мені не потрібно було самій ходити і збирати різні довідки і документи.", new DateTime(2024, 2, 12, 13, 1, 11, 0, DateTimeKind.Unspecified) },
                    { 5, "Ольга", "Хочу подякувати за неймовірну роботу ріелтора Анни Митченко, вже вдруге співпрацюємо з нею, всі поточні питання і ньюанси вона вирішує миттєво без нашого втручання, приємно продавати і здавати квартири з таким професійним підходом! Дякую і до нових зустрічей !", new DateTime(2024, 1, 17, 16, 59, 10, 0, DateTimeKind.Unspecified) },
                    { 6, "Маргарита", "Дуже дякую агенству і Валентинки особисто, взялись за мою справу хоча вона і здавалась безвихідною, весь час турботливо тримав мене в курсі всіх нюансів та змін, а також терпляче ставився до особливостей моєї особистості, що дуже важливо було особисто для мене, а також вибивав якомога вигідніші умови для мене. Дякую велике)", new DateTime(2024, 1, 10, 21, 15, 41, 0, DateTimeKind.Unspecified) },
                    { 7, "Світлана", "Дякую ріелтору Тетяні і юристу Юнні! Було приємно працювати з ними. Консультували по всім питанням, допомагали з документами, навіть самі брали деякі довідки. Значно полегшили процесс. Справжні профі!", new DateTime(2023, 12, 16, 14, 42, 31, 0, DateTimeKind.Unspecified) },
                    { 8, "Ніна", "Неймовірно задоволена співпрацею з ріелтором Писаренко Мариною та юристом Івановою Ольгою! Професіоналізм, увага до деталей та оперативність вражають. Процес купівлі житла став для мене легким та приємним. Рекомендую всім, хто цінує високий рівень сервісу у сфері нерухомості.", new DateTime(2023, 12, 24, 15, 49, 51, 0, DateTimeKind.Unspecified) },
                    { 9, "Олена", "Вдячні ріелтору Маріанні за підготовку проведення угоди з продажу нашої квартири та обговорення всіх моментів на попередньому договорі. Завдяки цьому основна угода щодо Е-оселя пройшла спокійно. гроші від ПриватБанку було зараховано того ж дня нам на рахунок. Все дуже чітко та оперативно та головне швидко. Реально за 3 дні: оцінка, попередній договір, основний договір та розрахунок! Рекомендую однозначно цю агенцію.", new DateTime(2024, 1, 28, 14, 5, 29, 0, DateTimeKind.Unspecified) },
                    { 10, "Анатолій", "Щиро вдячний Маріанні, Валентині та Юнні за Вашу допомогу у купівлі квартири. Ваші поради та рекомендації були мені дуже корисними. Ви завжди були на зв`язку та оперативно вирішували всі питання, що виникали.Завдяки Вам я зміг придбати квартиру своєї мрії. Дуже дякую!", new DateTime(2024, 2, 9, 16, 24, 5, 0, DateTimeKind.Unspecified) },
                    { 11, "Валетина", "Дуже вдячні ріелторам Юрію і Олені, а також юристу Юнні! Все пройшло дуже швидко, ми знайшли «свою» квартиру в перший же день переглядів і вже через пару тижнів отримали ключі на руки!Команда неймовірно професійна, привітна, і готова допомогти.З такими людьми, навіть не найпростіший процес пройшов дуже швидко і легко.В майбутньому, коли буде потреба, обов‘язково звернемося знову.", new DateTime(2023, 10, 12, 19, 52, 23, 0, DateTimeKind.Unspecified) },
                    { 12, "Артем", "Хочу висловити величезну подяку компанії Profi Realt за допомогу в покупці квартири, а зокрема ріелтору Москаленку Тетяні та юристу Бондарчук Юнні Ігорівні. Повне професійне супроводження від показів до покупки, комфортне спілкування, надання всіх потрібних документів, пунктуальність у часі, а також у всіх тонкощах та ньюансах. При наступній угоді, знову звернуся до цих чудових та професійних фахівців у своїй справі!", new DateTime(2023, 10, 11, 13, 31, 55, 0, DateTimeKind.Unspecified) }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClientsInfo_request_id",
                table: "ClientsInfo",
                column: "request_id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RequestEstate_request_id",
                table: "RequestEstate",
                column: "request_id",
                unique: true,
                filter: "[request_id] IS NOT NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClientsInfo");

            migrationBuilder.DropTable(
                name: "Complexes");

            migrationBuilder.DropTable(
                name: "Estate");

            migrationBuilder.DropTable(
                name: "Newsletters");

            migrationBuilder.DropTable(
                name: "RequestEstate");

            migrationBuilder.DropTable(
                name: "Reviews");

            migrationBuilder.DropTable(
                name: "Requests");

            migrationBuilder.DropSequence(
                name: "EstateSequence");
        }
    }
}
