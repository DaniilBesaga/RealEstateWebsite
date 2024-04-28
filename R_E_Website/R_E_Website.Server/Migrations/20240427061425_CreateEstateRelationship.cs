using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace R_E_Website.Server.Migrations
{
    /// <inheritdoc />
    public partial class CreateEstateRelationship : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RequestEstate_Requests_request_id",
                table: "RequestEstate");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RequestEstate",
                table: "RequestEstate");

            migrationBuilder.RenameTable(
                name: "RequestEstate",
                newName: "RequestsEstate");

            migrationBuilder.RenameIndex(
                name: "IX_RequestEstate_request_id",
                table: "RequestsEstate",
                newName: "IX_RequestsEstate_request_id");

            migrationBuilder.AlterColumn<int>(
                name: "estate_id",
                table: "OrdersService",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddPrimaryKey(
                name: "PK_RequestsEstate",
                table: "RequestsEstate",
                column: "estate_id");

            migrationBuilder.AddForeignKey(
                name: "FK_RequestsEstate_Requests_request_id",
                table: "RequestsEstate",
                column: "request_id",
                principalTable: "Requests",
                principalColumn: "request_id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RequestsEstate_Requests_request_id",
                table: "RequestsEstate");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RequestsEstate",
                table: "RequestsEstate");

            migrationBuilder.RenameTable(
                name: "RequestsEstate",
                newName: "RequestEstate");

            migrationBuilder.RenameIndex(
                name: "IX_RequestsEstate_request_id",
                table: "RequestEstate",
                newName: "IX_RequestEstate_request_id");

            migrationBuilder.AlterColumn<int>(
                name: "estate_id",
                table: "OrdersService",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_RequestEstate",
                table: "RequestEstate",
                column: "estate_id");

            migrationBuilder.AddForeignKey(
                name: "FK_RequestEstate_Requests_request_id",
                table: "RequestEstate",
                column: "request_id",
                principalTable: "Requests",
                principalColumn: "request_id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
