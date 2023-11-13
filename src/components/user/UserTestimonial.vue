<template>
    <div>
        <div class="testimonials">
		<div class="parallax_background parallax-window" data-parallax="scroll" :data-image-src="require('@/assets/images/testimonials.jpg')" data-speed="0.8"></div>
		<div class="testimonials_overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="testimonials_slider_container">

						<!-- Testimonials Slider -->
						<div class="owl-carousel owl-theme test_slider">
							
							<!-- Slide -->
							<div  class="test_slider_item text-center">
								<div class="rating rating_5 d-flex flex-row align-items-start justify-content-center"><i></i><i></i><i></i><i></i><i></i></div>
								<div class="testimonial_title"><a href="#">Perfect Stay</a></div>
								<div class="testimonial_text">
									<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic.</p>
								</div>
								<div class="testimonial_image"><img :src="require('@/assets/images/user_1.jpg')" alt=""></div>
								<div class="testimonial_author"><a href="#">Samantha Smith</a>, Greece</div>
							</div>

							<!-- Slide -->
							<div  class="test_slider_item text-center">
								<div class="rating rating_5 d-flex flex-row align-items-start justify-content-center"><i></i><i></i><i></i><i></i><i></i></div>
								<div class="testimonial_title"><a href="#">Nice place</a></div>
								<div class="testimonial_text">
									<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic.</p>
								</div>
								<div class="testimonial_image"><img :src="require('@/assets/images/user_2.jpg')" alt=""></div>
								<div class="testimonial_author"><a href="#">Michael Doe</a>, Italy</div>
							</div>

							<!-- Slide -->
							<div  class="test_slider_item text-center">
								<div class="rating rating_5 d-flex flex-row align-items-start justify-content-center"><i></i><i></i><i></i><i></i><i></i></div>
								<div class="testimonial_title"><a href="#">We loved it</a></div>
								<div class="testimonial_text">
									<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic.</p>
								</div>
								<div class="testimonial_image"><img :src="require('@/assets/images/user_3.jpg')" alt=""></div>
								<div class="testimonial_author"><a href="#">Luis Garcia</a>, Spain</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
</template>
<script>
export default {
    name:'UserTestimonial',
}
</script>