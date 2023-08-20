<template>
  <q-page padding>
    <div>
      <div><LanguageSelect /></div>
      <div><DisplayButton  @displayText="handleDisplay"/></div>
      <hr />
      <div id="text" v-html="this.text"></div>
    </div>
  </q-page>
</template>

<script>
import LanguageSelect from "components/Gospel/LanguageSelect.vue";
import DisplayButton from "components/Gospel/DisplayButton.vue";
export default {
  name: "DiscoveryBibleStudy",
  props: ['languageCodeHL1','languageCodeHL2','session'],
  components: {
    LanguageSelect,
    DisplayButton,
  },
  data() {
    return {
      text: "",
    };
  },
  methods:{
    handleDisplay(response){
      this.text = response
    }
  }
};
</script>
<style>


/*
** colors for div
*/
.section-title{
	background-color: #fff;
	font-size: 1.5em;
	line-height: 1.8em;
	color: #0d9ecc;
	color: #005c86;
	white-space: normal;
	text-align: left;
	position: relative;
	display:table-cell;
}
.section-intro,
.section-law1,
.section-law2,
.section-law3,
.section-law4,
.section-circles,
.div-circles,
.section-prayer,
.section-know,
.section-nowthat,
.section-grow,
.section-feel,
.section-church,
.section-contact
{
	background-color: #fff;
	border:none;
}
tr.even,
tr.odd,
tr:nth-child(2n+2),
tr.info,
tr.tract-row{
	background-color: #fff;
}
.section-copyright{
	padding-top: 40px;
	padding-left: 15px;
	padding-right: 15px;


}
.nodisplay{
	display:none;
}

table {
  table-layout: fixed;
}
#tract-table{
	border:none;
	background-color: #fff;
}

tbody tr {
  border-top:none;
}
.tract-header{
	background-color: #FFF;
	border:none;
}

tr.tract-row{
	vertical-align: top;
}
td.side-left,
th.side-left {
  border-bottom: 0;
  padding-left: 5px;
  padding-right: 30px;
}
td.side-right,
th.side-right {
  border-bottom: 0;

  padding-left: 30px;
  padding-right: 5px;
}
td.tract-image,
td.tract-circle1,
td.tract-circle2{
	text-align: center;
}

a{
	color:#aa0040;
}

.tract-image-image{
	max-width: 90%;
  height: auto;
  width: auto; /* ie8 */
}
.tract-image-circle-image{
	max-width: 90%;
  height: auto;
  width: auto\9; /* ie8 */
}

.tract-lawheading{
	font-size: 1.1em;
	font-weight: bold;
	color: darkred;
	color: #f8aa00;
	color: #0d9ecc;

}
.tract-law,
.mylanguage
{
	font-size: 1.1em;
	line-height:1.3em;
	font-weight: bold;
	color: #0d9ecc;
	color: #005C86;


}
.tract-law-number{
	font-size: 5em;
	color: #0d9ecc;
	color: #F7901E;
	color: #AF272F;
	color: #CB333B;
	color: #f65058;
	vertical-align:top;
	line-height: .75em;
}

.mylanguage{
	padding-left: 15px;
	padding-right: 15px;
}
.tract-countryname,
.tract-heading{
	font-size: 1.1em;
	line-height:1.3em;
	margin-top: 10px;
	color: #0d9ecc;
	color: #f8aa00;
	color: #005C86;
	color: #bf1f10;
	color: #AF272F;
	color: #CB333B;
	color: #f65058;
	font-weight: bold;
}
.tract-verse{
	font-size: 1em;
	line-height:1.3em;
	font-style: italic;
	color: green;
	color: black

}
.tract-text{
	font-size: 1em;
	color: #000;

}
.tract-explanation{
	font-size: .8em;
	color: #000;

}
.tract-circle-image{
		text-align:center;
}
p.tract-circle-heading-ltr,
p.tract-circle-heading-rtl,
.tract-circle-heading
{
	font-size: 1.3em;
    color: #f8aa00;
    color: #f65058;
	line-height:1.5em;
	text-align:center;
	font-weight: bold;
}
p.tract-circle-subhead,
.tract-circle-image
{
	font-size: 1em;
	color: #000;
	text-align:center;
	font-weight: bold;
}
p.tract-circle-point-ltr,
.tract-circle-text
{
	font-size: 1em;
	color: #000;
	text-align:left;
}
p.tract-circle-point-rtl
{
	font-size: 1em;
	color: #000;
	text-align:right;
	direction: rtl;
}
.tract-circle-footer-ltr{
	font-size: 1em;
	color: #000;
	text-align:center;
	font-weight: bold;
}
.tract-circle-footer-rtl{
	font-size: 1em;
	color: #000;
	text-align:center;
	font-weight: bold;
	direction: rtl;
}
.tract-circle-explanation,
.tract-circle-explanation-ltr,
.tract-circle-explanation-rtl{
	font-size: .8em;
	color: #000;
	text-align:center;
}
.tract-heading.translation,
.tract-verse.translation,
.translation{
	color: #aaa;

}
.tract-prayer,
.tract-address,
.bold{
	font-weight: bold;
}

a.tract-link{
	color: #005C86;
}

</style>
