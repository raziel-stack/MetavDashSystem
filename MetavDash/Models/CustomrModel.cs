using System;
using System.ComponentModel.DataAnnotations;

namespace MetavDash.Models
{
    public class CustomrModel
    {
        [Required(ErrorMessage = "Full name is Required.")]
        [RegularExpression("^(?=^.{0,19}$)[A-Za-zא-ת ]+$", ErrorMessage = "Full name is letters only, no more then 20 letters.")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "BirthDate is Required.")]
        [RegularExpression("^(?:[012]?[0-9]|3[01])[./-](?:0?[1-9]|1[0-2])[./-](?:[0-9]{2}){1,2}$", ErrorMessage = "The birthDate pattern is must be dd/M/yyyy")]
        public string BirthDate { get; set; }

        [Required(ErrorMessage = "ID number is Required.")]
        [RegularExpression("\\b[0-9]{9}\\b", ErrorMessage = "ID number is not good.")]
        public string IdNum { get; set; }
    }
}
