using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace R_E_Website.Server.Migrations
{
    /// <inheritdoc />
    public partial class Fix2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "kitchenSquare",
                table: "RequestEstate",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "imgsUrl",
                table: "RequestEstate",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "discriptiion",
                table: "RequestEstate",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<int>(
                name: "kitchenSquare",
                table: "Estate",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "imgsUrl",
                table: "Estate",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "discriptiion",
                table: "Estate",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateTable(
                name: "OrdersService",
                columns: table => new
                {
                    order_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    client_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    client_phone = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrdersService", x => x.order_id);
                });

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 9,
                column: "kitchenSquare",
                value: null);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 10,
                column: "kitchenSquare",
                value: null);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 11,
                column: "kitchenSquare",
                value: null);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 12,
                column: "kitchenSquare",
                value: null);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 13,
                column: "kitchenSquare",
                value: null);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 14,
                column: "kitchenSquare",
                value: null);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 15,
                column: "kitchenSquare",
                value: null);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 16,
                column: "kitchenSquare",
                value: null);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrdersService");

            migrationBuilder.AlterColumn<int>(
                name: "kitchenSquare",
                table: "RequestEstate",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "imgsUrl",
                table: "RequestEstate",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "discriptiion",
                table: "RequestEstate",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "kitchenSquare",
                table: "Estate",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "imgsUrl",
                table: "Estate",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "discriptiion",
                table: "Estate",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 9,
                column: "kitchenSquare",
                value: 0);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 10,
                column: "kitchenSquare",
                value: 0);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 11,
                column: "kitchenSquare",
                value: 0);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 12,
                column: "kitchenSquare",
                value: 0);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 13,
                column: "kitchenSquare",
                value: 0);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 14,
                column: "kitchenSquare",
                value: 0);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 15,
                column: "kitchenSquare",
                value: 0);

            migrationBuilder.UpdateData(
                table: "Estate",
                keyColumn: "estate_id",
                keyValue: 16,
                column: "kitchenSquare",
                value: 0);
        }
    }
}
