using R_E_Website.Server.Models;
using System.Net.Mail;
using System.Net;
using Azure.Storage.Blobs;
using Microsoft.EntityFrameworkCore;

namespace R_E_Website.Server.Utils
{
    public class Utils
    {
        public static void SendEmail(Newsletter newsletter)
        {
            using(var client = new SmtpClient())
            {
                client.Host = "smtp.gmail.com";
                client.Port = 587;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.UseDefaultCredentials = false;
                client.EnableSsl = true;
                client.Credentials = new NetworkCredential("zloikot.mya@gmail.com", "phoi lylc wals pwvd");
                using (var message = new MailMessage(
                    from: new MailAddress("zloikot.mya@gmail.com", "Pivo"),
                    to: new MailAddress($"{newsletter.Email}", "")
                    ))
                {

                    message.Subject = "Розсилка ProfiRealt";
                    message.Body = "Ви щойно підписалися на розсилку ProfiRealt." +
                        "\nДякуємо, що Ви з нами!";

                    client.Send(message);
                }
            }
        }

        public static List<string> AzureConnetionImages(string container)
        {
            string connectionString = "DefaultEndpointsProtocol=https;AccountName=profirealt;AccountKey=tvTsQXf/+qyEuXBntsjOPQlEa7HakqgHaf7EJFPz9F52gGnc7LppbkUmNtGMH1JQzmtZ5v3ptDBN+ASt0hWoMA==;EndpointSuffix=core.windows.net";

            BlobContainerClient blobContainerClient =
                new BlobContainerClient(connectionString,
                    $"{container}s");

            var bs = blobContainerClient.GetBlobs();
            var firstImages = bs
            .GroupBy(blob => blob.Name.Split('/')[0])
            .Select(group => group.First())
            .Select(x => x.Name.Split("/")[1])
            .ToList();

            return firstImages;
        }

    }
}
