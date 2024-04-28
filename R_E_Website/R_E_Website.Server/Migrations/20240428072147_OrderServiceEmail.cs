using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace R_E_Website.Server.Migrations
{
    /// <inheritdoc />
    public partial class OrderServiceEmail : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "client_email",
                table: "OrdersService",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "client_email",
                table: "OrdersService");
        }
    }
}
