<template>
    <div>
        <div class="gallery">
		<div class="gallery_slider_container">
			<div class="owl-carousel owl-theme gallery_slider">
				
				<!-- Slide -->
				<div class="gallery_item">
					<div class="background_image" :style="{
      'background-image': 'url(' + require(`@/assets/images/${galleryOne}`) + ')'
  }"></div>
					<a class="colorbox" href="images/gallery_1.jpg"></a>
				</div>

				<!-- Slide -->
				<div class="gallery_item">
					<div class="background_image" :style="{
      'background-image': 'url(' + require(`@/assets/images/${galleryTwo}`) + ')'
  }"></div>
					<a class="colorbox" href="images/gallery_2.jpg"></a>
				</div>

				<!-- Slide -->
				<div class="gallery_item">
					<div class="background_image" :style="{
      'background-image': 'url(' + require(`@/assets/images/${galleryThree}`) + ')'
  }"></div>
					<a class="colorbox" href="images/gallery_3.jpg"></a>
				</div>

				<!-- Slide -->
				<div class="gallery_item">
					<div class="background_image" :style="{
      'background-image': 'url(' + require(`@/assets/images/${galleryFour}`) + ')'
  }"></div>
					<a class="colorbox" href="images/gallery_4.jpg"></a>
				</div>

			</div>
		</div>
	</div>
    </div>
</template>
<script>
export default {
    name:'UserGallery',
    data() {
        return {
            galleryOne:'gallery_1.jpg',
			galleryTwo:'gallery_2.jpg',
			galleryThree:'gallery_3.jpg',
            galleryFour:'gallery_4.jpg',
        }
    },
}
</script>