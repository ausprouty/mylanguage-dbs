<template>
	<div id="home" class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-md-6">
				<div class="card card-body">
					<button class="btn btn-primary pl-5 pr-5" @click="download">Download PDF</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
// from https://codersdiaries.com/blog/vue-js-pdf-generate
import jsPDF from 'jsPDF'

export default {
	name: 'PdfButton',
	props:{
    text: String,
    filename: String,
  },
	methods: {
		download () {
      let pdfName = this.filename;
      var doc = new jsPDF();
      doc.fromHTML(this.text, 10, 10);
      doc.save(pdfName + '.pdf');
    }
	}
}
</script>
