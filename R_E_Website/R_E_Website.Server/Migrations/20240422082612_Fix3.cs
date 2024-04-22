using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace R_E_Website.Server.Migrations
{
    /// <inheritdoc />
    public partial class Fix3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "complexName",
                table: "RequestEstate");

            migrationBuilder.DropColumn(
                name: "complexName",
                table: "Estate");

            migrationBuilder.RenameColumn(
                name: "discriptiion",
                table: "RequestEstate",
                newName: "estate_address_eng");

            migrationBuilder.RenameColumn(
                name: "complexUrl",
                table: "RequestEstate",
                newName: "descriptiion");

            migrationBuilder.RenameColumn(
                name: "discriptiion",
                table: "Estate",
                newName: "estate_address_eng");

            migrationBuilder.RenameColumn(
                name: "complexUrl",
                table: "Estate",
                newName: "descriptiion");

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 1,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Затишна квартира на 1 кімнату у місті Київ, район Подільський, знаходиться на 5 поверсі. Площа становить 58 м2.Просторна кухня-вітальня оснащена необхідною вбудованою побутовою технікою та меблями високої якості. На підлогах ламінат та кахель. У просторому санвузлі ванна, раковина, унітаз, пральна машина. Житловий комплекс із системою відеоспостереження та охороною по периметру. На території дитячі майданчики, тренажери, поряд каскад озер та паркова зона. ", "DanchenkaSerhiyaAvenue5" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 2,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Чудова двокімнатна квартира в самому центрі Києва, вражає своєю просторістю та затишком. Загальна площа складає 75 м2, з просторою вітальнею та вбудоваою кухнею. В квартирі є все необхідне для комфортного проживання. Для майбутніх мешканців є підземний паркінг та парковочні місця біля будинку.", "HolosievkiyAvenue84" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 3,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Елітна трьохкімнатна квартира з видом на море в інноваційному житловому центрі Одеси. Площа квартири 120 м2, велика вітальня, окрема кухня з виходом на балкон, дві спальні та два санвузли. Житловий комплекс має власний парк і дитячий сад, а також власну інфраструктуру. Для мешканців парковка, охорона та консьєрж-сервіс.", "PravduAvenue49" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 4,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Простора квартира з чотирма спальнями в новобудові з закритою територією, дитячим майданчиком та парковкою. Квартира з якісним ремонтом, повністю укомплектована меблями і технікою. Сучасне планування з кухнею-вітальнею, три санвузли, вбудована кухня, балкон з чудовим краєвидом. У дворі є місце для парковки авто, ліфт та дитячий майданчик.", "RevutskogoAvenue40B" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 5,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "4-х кімнатний, двоповерховий будинок із профільного бруса, з лазнею та сонячною електростанцією, загальною площею 208м. У Броварах.\r\n10 соток землі\r\nНавіс під автомобілі\r\nДистанційні ворота\r\nВода – свердловина 50 м\r\nГаз\r\nКаналізація - двокамерний септик\r\nЕлектрика - централізована 15 кВт та сонячна Електростанція на 10 кВт з оформленим зеленим тарифом та чистим прибутком 500-600 дол\r\nСигналізація по периметру\r\nГазон з автополивом\r\nТри котли - газовий, електро та твердопаливний", "IrpinskaStreet40" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 6,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Двоповерховий будинок. Скважина - 60м.п. підведено в будинок, її при ямок можливо використовувати, як погріб.лектрика 32 кВт розведена по будинку і частково на другому поверсі + зроблене заземлення. В будинок кабель заходить під землею.\r\nТеплі водяні поли з ел.котлем Bosh 24 кВт\r\nВ будинку на першому поверсі чистова стяжка, на другому дерев'яне перекриття.\r\nЧастково присутня штукатурка.", "PoljovaStreet7" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 7,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Опалення - газовий двоконтурний котел, оплата за лічильником, також на будинок заведено 2 фази по 16 кВт електроенергії, встановлений лічильник День - Ніч, прямий договір з ДТЕК. Стіни - цегла(380 мм) + утеплення(60 мм).Зовні - кароїд + фарбування. Дах - бітумна черепиця. У будинку встановлено справжній камін", "SchevchenkoStreet20" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 8,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Будинок деревяний але обкладений цеглою, у будинку, газові конвектори, грубка для альтернативного опалення будинку, встановлено металопластикові вікна. Також є топоміжні примішення, літня кухня та господарська споруда, а також погріб для зберігання продуктів. Ділянка розташована у зручному місці, поруч школа, садок, магазини і транспортна зупинка.", "TroitskaStreet10" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 9,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Продається земельна ділянка під будівництво будинку. Площа 11 соток, р-н геріатричного пансіонату, \"Школярка\") Комунікації на ділянці відсутні (електрика, газ підведені поруч із ділянкою) Прекрасне розташування. Поруч збудовані будинки", "Chereshnevaya38" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 10,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Продається земельна ділянка в чудовому мальовничому місці. Перші Новоселицьі дачі. Діляночка рівненька, доглянута. Вода від башти Світло на ділянці; Газ поруч; Зручний заїзд з центральної дороги", "HlebovaAlley" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 11,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Продаж земельної ділянки сільськогосподарського призначення! Є вода від башні та септик. Газ та світло поруч з ділянкою. На ділянці деревʼяний будинок. Частково зроблений паркан. Вулиця обжита. Дуже гарне місце та спокійне місце розташування.", "LesiUkrainkiAlley13" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 12,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Продається земельна ділянка у мальовничому місці біля лісу, чудове місце для будівництва будинку своєї мрії! На ділянці підключене світло 16 кВат, газова труба проходить по під ділянку - є можливість підключення! Ділянка рівна прямокутна правильної форми. До центру міста 3 хвилини автомобілем. Аналогів в місті не знайдете!", "OstromirskaStreet7" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 13,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Продається паркове місце. По вулиці Васильченка 3. Парко місце під охороною, Закрита територія. Один заїзд. 15 КВ метрів. Парк місце знаходиться в кінці паркінгу. ", "AnnaAhmatovoiStreet13" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 14,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Продається доглянутий гараж з підвальним приміщенням в гаражному кооперативі \"Троянда\", що знаходиться по вулиці Берковецька 6. Територія охороняється, також є відеонагляд. Поруч знаходяться житлові комплекси ЖК \"Lalalend\", та ЖК \"Lucy Land\", в трьох хвилинах ходьби розташований ТРЦ \"Lavina\"", "BerkovetskayaStreet6" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 15,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Продається паркомісце в Подільському районі, Липинка. Паркомісце знаходиться у багаторівневому паркінгу на третьому відкритому поверсі, біля Крістер Града, ЖК Варшавського та ЖК Липинки. Зручне на виїзд та виїзд. Є ліфт та цілодобова охорона. Право власності. Податки сплачуємо за себе.", "DanchenkoSerhiyaStreet1a" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 16,
                columns: new[] { "descriptiion", "estate_address_eng" },
                values: new object[] { "Продаж двоповерхового офісного приміщення, загальною площею 140 кв м у центральній частині міста за сім хвилин ходьби від станції метро Площа Українських Героїв. Окремий вхід, закрита територія. Вхід до офісного приміщення здійснюється з вул. Шовковична, Басейна, Кропивницького. Кабінетна система, кухня-їдальня, санвузли на кожному поверсі. Індивідуальне опалення, своя скважина. Є окремий гараж.", "KropivnitskogoStreet10" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "estate_address_eng",
                table: "RequestEstate",
                newName: "discriptiion");

            migrationBuilder.RenameColumn(
                name: "descriptiion",
                table: "RequestEstate",
                newName: "complexUrl");

            migrationBuilder.RenameColumn(
                name: "estate_address_eng",
                table: "Estate",
                newName: "discriptiion");

            migrationBuilder.RenameColumn(
                name: "descriptiion",
                table: "Estate",
                newName: "complexUrl");

            migrationBuilder.AddColumn<string>(
                name: "complexName",
                table: "RequestEstate",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "complexName",
                table: "Estate",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 1,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { "044", "/", "Затишна квартира на 1 кімнату у місті Київ, район Подільський, знаходиться на 5 поверсі. Площа становить 58 м2.Просторна кухня-вітальня оснащена необхідною вбудованою побутовою технікою та меблями високої якості. На підлогах ламінат та кахель. У просторому санвузлі ванна, раковина, унітаз, пральна машина. Житловий комплекс із системою відеоспостереження та охороною по периметру. На території дитячі майданчики, тренажери, поряд каскад озер та паркова зона. " });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 2,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { "4U", "/", "Чудова двокімнатна квартира в самому центрі Києва, вражає своєю просторістю та затишком. Загальна площа складає 75 м2, з просторою вітальнею та вбудоваою кухнею. В квартирі є все необхідне для комфортного проживання. Для майбутніх мешканців є підземний паркінг та парковочні місця біля будинку." });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 3,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { "Bristol", "/", "Елітна трьохкімнатна квартира з видом на море в інноваційному житловому центрі Одеси. Площа квартири 120 м2, велика вітальня, окрема кухня з виходом на балкон, дві спальні та два санвузли. Житловий комплекс має власний парк і дитячий сад, а також власну інфраструктуру. Для мешканців парковка, охорона та консьєрж-сервіс." });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 4,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { "Arch House", "/", "Простора квартира з чотирма спальнями в новобудові з закритою територією, дитячим майданчиком та парковкою. Квартира з якісним ремонтом, повністю укомплектована меблями і технікою. Сучасне планування з кухнею-вітальнею, три санвузли, вбудована кухня, балкон з чудовим краєвидом. У дворі є місце для парковки авто, ліфт та дитячий майданчик." });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 5,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { null, null, "4-х кімнатний, двоповерховий будинок із профільного бруса, з лазнею та сонячною електростанцією, загальною площею 208м. У Броварах.\r\n10 соток землі\r\nНавіс під автомобілі\r\nДистанційні ворота\r\nВода – свердловина 50 м\r\nГаз\r\nКаналізація - двокамерний септик\r\nЕлектрика - централізована 15 кВт та сонячна Електростанція на 10 кВт з оформленим зеленим тарифом та чистим прибутком 500-600 дол\r\nСигналізація по периметру\r\nГазон з автополивом\r\nТри котли - газовий, електро та твердопаливний" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 6,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { null, null, "Двоповерховий будинок. Скважина - 60м.п. підведено в будинок, її при ямок можливо використовувати, як погріб.лектрика 32 кВт розведена по будинку і частково на другому поверсі + зроблене заземлення. В будинок кабель заходить під землею.\r\nТеплі водяні поли з ел.котлем Bosh 24 кВт\r\nВ будинку на першому поверсі чистова стяжка, на другому дерев'яне перекриття.\r\nЧастково присутня штукатурка." });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 7,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { null, null, "Опалення - газовий двоконтурний котел, оплата за лічильником, також на будинок заведено 2 фази по 16 кВт електроенергії, встановлений лічильник День - Ніч, прямий договір з ДТЕК. Стіни - цегла(380 мм) + утеплення(60 мм).Зовні - кароїд + фарбування. Дах - бітумна черепиця. У будинку встановлено справжній камін" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 8,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { null, null, "Будинок деревяний але обкладений цеглою, у будинку, газові конвектори, грубка для альтернативного опалення будинку, встановлено металопластикові вікна. Також є топоміжні примішення, літня кухня та господарська споруда, а також погріб для зберігання продуктів. Ділянка розташована у зручному місці, поруч школа, садок, магазини і транспортна зупинка." });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 9,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { null, null, "Продається земельна ділянка під будівництво будинку. Площа 11 соток, р-н геріатричного пансіонату, \"Школярка\") Комунікації на ділянці відсутні (електрика, газ підведені поруч із ділянкою) Прекрасне розташування. Поруч збудовані будинки" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 10,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { null, null, "Продається земельна ділянка в чудовому мальовничому місці. Перші Новоселицьі дачі. Діляночка рівненька, доглянута. Вода від башти Світло на ділянці; Газ поруч; Зручний заїзд з центральної дороги" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 11,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { null, null, "Продаж земельної ділянки сільськогосподарського призначення! Є вода від башні та септик. Газ та світло поруч з ділянкою. На ділянці деревʼяний будинок. Частково зроблений паркан. Вулиця обжита. Дуже гарне місце та спокійне місце розташування." });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 12,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { null, null, "Продається земельна ділянка у мальовничому місці біля лісу, чудове місце для будівництва будинку своєї мрії! На ділянці підключене світло 16 кВат, газова труба проходить по під ділянку - є можливість підключення! Ділянка рівна прямокутна правильної форми. До центру міста 3 хвилини автомобілем. Аналогів в місті не знайдете!" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 13,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { null, null, "Продається паркове місце. По вулиці Васильченка 3. Парко місце під охороною, Закрита територія. Один заїзд. 15 КВ метрів. Парк місце знаходиться в кінці паркінгу. " });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 14,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { null, null, "Продається доглянутий гараж з підвальним приміщенням в гаражному кооперативі \"Троянда\", що знаходиться по вулиці Берковецька 6. Територія охороняється, також є відеонагляд. Поруч знаходяться житлові комплекси ЖК \"Lalalend\", та ЖК \"Lucy Land\", в трьох хвилинах ходьби розташований ТРЦ \"Lavina\"" });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 15,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { null, null, "Продається паркомісце в Подільському районі, Липинка. Паркомісце знаходиться у багаторівневому паркінгу на третьому відкритому поверсі, біля Крістер Града, ЖК Варшавського та ЖК Липинки. Зручне на виїзд та виїзд. Є ліфт та цілодобова охорона. Право власності. Податки сплачуємо за себе." });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 16,
                columns: new[] { "complexName", "complexUrl", "discriptiion" },
                values: new object[] { null, null, "Продаж двоповерхового офісного приміщення, загальною площею 140 кв м у центральній частині міста за сім хвилин ходьби від станції метро Площа Українських Героїв. Окремий вхід, закрита територія. Вхід до офісного приміщення здійснюється з вул. Шовковична, Басейна, Кропивницького. Кабінетна система, кухня-їдальня, санвузли на кожному поверсі. Індивідуальне опалення, своя скважина. Є окремий гараж." });
        }
    }
}
