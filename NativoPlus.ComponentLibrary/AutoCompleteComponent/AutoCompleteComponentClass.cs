using Microsoft.AspNetCore.Blazor.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using NativoPlus.ComponentLibrary.Modals;

namespace NativoPlus.ComponentLibrary.AutoCompleteComponent
{
    public class AutoCompleteComponentClass : BlazorComponent
    {
        [Parameter]
        protected bool AutoComplete { get; set;} = true;        //Auto complete Enable/desable, true by default
        protected HttpClient _client { get; set; } = new HttpClient();
    //    protected string Term { get; set; } = String.Empty;
        protected bool _isOpen { get; set; } = false;
        protected IList<SuggestionResponse> SuggestionList { get; set; } = new List<SuggestionResponse>() { new SuggestionResponse {Suggestion = "Alaska" }, new SuggestionResponse { Suggestion = "Puerto Rico" } };
        [Parameter]
        protected string SelectedValue { get; set; } = String.Empty;

        [Parameter]
        protected string Term { get; set; } = String.Empty;

        [Parameter]
        protected string Placeholder { get; set; } = String.Empty;

        [Parameter]
        protected string Url { get; set; } = String.Empty;

        [Parameter]
        protected string Root { get; set; } = String.Empty;

        [Parameter]
        protected string Name { get; set; } = String.Empty;

        [Parameter]
        protected string Class { get; set; } = String.Empty;

        [Parameter]
        protected string Style { get; set; } = String.Empty;

        [Parameter]
        protected Action<string> OnSelectionMade { get; set; }

        [Parameter]
        protected int CharLimit { get; set; } = 3;

       
    }
}
