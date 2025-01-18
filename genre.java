import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.reactive.function.client.WebClient;

@Controller
public class MusicRecommendationController {

    @PostMapping("/recommend")
    public ModelAndView recommendMusic(@RequestParam("language") String language, @RequestParam("genre") String genre) {
        // Use WebClient to fetch music recommendations from an external API like Spotify
        WebClient webClient1 = WebClient.create("https://api.spotify.com/v1");
         WebClient webClient2 = WebClient.create("");
        // Mock call - Replace with actual API call logic
        String recommendations = "Music recommendations based on " + language + " language and " + genre + " genre.";

        // Process the API response and display results
        ModelAndView modelAndView = new ModelAndView("recommendations");
        modelAndView.addObject("recommendations", recommendations);
        return modelAndView;
    }
}
