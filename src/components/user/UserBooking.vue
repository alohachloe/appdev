<template>
    <div>
        <div class="booking">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="booking_title text-center"><h2>Book a room</h2></div>
					<div class="booking_text text-center">
						<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit.</p>
					</div>

					<!-- Booking Slider -->
					<div class="booking_slider_container">
						<div class="owl-carousel owl-theme booking_slider">
							
							<!-- Slide -->
							<div class="booking_item">
								<div class="background_image" :style="{
      'background-image': 'url(' + require(`@/assets/images/${bookingOne}`) + ')'
  }"></div>
								<div class="booking_overlay trans_200"></div>
								<div class="booking_price">$120/Night</div>
								<div class="booking_link"><a href="booking.html">Family Room</a></div>
							</div>

							<!-- Slide -->
							<div class="booking_item">
								<div class="background_image" :style="{
      'background-image': 'url(' + require(`@/assets/images/${bookingTwo}`) + ')'
  }"></div>
								<div class="booking_overlay trans_200"></div>
								<div class="booking_price">$120/Night</div>
								<div class="booking_link"><a href="booking.html">Deluxe Room</a></div>
							</div>

							<!-- Slide -->
							<div class="booking_item">
								<div class="background_image" :style="{
      'background-image': 'url(' + require(`@/assets/images/${bookingThree}`) + ')'
  }"></div>
								<div class="booking_overlay trans_200"></div>
								<div class="booking_price">$120/Night</div>
								<div class="booking_link"><a href="booking.html">Single Room</a></div>
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
    name:'UserBooking',
    data() {
        return {
            bookingOne:'booking_1.jpg',
            bookingTwo:'booking_2.jpg',
            bookingThree:'booking_3.jpg',
        }
    },
}
</script>