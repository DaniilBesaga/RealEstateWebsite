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
            try
            {
                using (var client = new SmtpClient())
                {
                    client.Host = "smtp.gmail.com";
                    client.Port = 587;
                    client.DeliveryMethod = SmtpDeliveryMethod.Network;
                    client.UseDefaultCredentials = false;
                    client.EnableSsl = true;
                    client.Credentials = new NetworkCredential("zloikot.mya@gmail.com", "phoi lylc wals pwvd");
                    using (var message = new MailMessage(
                        from: new MailAddress("zloikot.mya@gmail.com", "Admin"),
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
            catch
            {
                Console.WriteLine("Something went wrong...");
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

        public static void SendRequestEmail(Request request)
        {
            using (var client = new SmtpClient())
            {
                client.Host = "smtp.gmail.com";
                client.Port = 587;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.UseDefaultCredentials = false;
                client.EnableSsl = true;
                client.Credentials = new NetworkCredential("zloikot.mya@gmail.com", "phoi lylc wals pwvd");

                string requestAction = request.RequestType == Enums.RequestType.Sell ? "придбання" : "продаж";

                using (var message = new MailMessage(
                    from: new MailAddress("zloikot.mya@gmail.com", "Admin"),
                    to: new MailAddress($"{request.ClientInfo.Email}", $"{request.ClientInfo.Name}")
                    ))
                {

                    message.Subject = $"Заявка на {requestAction} житла";
                    message.Body = $"Вітаємо, шановний ${request.ClientInfo.Name}!+" +
                        $"\nВи залишили заявку на ${requestAction} житла" +
                        $"\nМи зв'яжемося з Вами найближчими днями." +
                        $"Гарного дня та дякуємо, що обрали нас!";

                    client.Send(message);
                }
            }
        }

    }
}
