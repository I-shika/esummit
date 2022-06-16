import Image from 'next/image'
import styles from '../styles/Home.module.css'


export const getStaticProps = async () => {
  const res = await fetch('https://api.esummit.in/events/all')
  const data =  await res.json();
  return {props :{data,},}
}

function show(props){
    return ( <div  className={styles.body}>
    <div  className={styles.event_heading}>
    <h3>EVENTS</h3>
    </div>
    <div className={styles.img_flex}>
    {props.data.CompetitiveEvents.slice(0,1).map(
      show=> {
        return(
        
          <div className={styles.event_part_one}>
           <div className={styles.event_images_one} >
              <img src={show.card_image} className={styles.event_image_tag}></img>
               <div className={styles.event_names_one}>
                  {show.event_name}
                   </div>
                <div className={styles.event_description_one}>
                     <div className={styles.show_description_one}>
                     {show.card_description}
                </div>
              </div>
              </div>
              </div>
    )})}
    {props.data.CompetitiveEvents.slice(1,2).map(
      show=> {
        return(
           <div className={styles.event_images_two}>

            <img src={show.card_image}></img>
            {/* <div className={styles.event_names_two}> */}
            <div className={styles.event_names_two}>  {show.event_name}</div>
            {/* </div> */}
          </div>
        
    )})}
    {props.data.CompetitiveEvents.slice(2,3).map(
      show=> {
        return(
           <div className={styles.event_images_three}>
       
            <img src={show.card_image }></img>
            <div className={styles.event_names_three}>
              {show.event_name}
            </div>
          </div>
         
    )})}
    {props.data.CompetitiveEvents.slice(3,4).map(
      show=> {
        return(
           <div className={styles.event_images_four}>
        
            <img src={show.card_image}></img>
            <div className={styles.event_names_four}>
              {show.event_name}
            </div>
          </div>
         
    )})}
    {props.data.CompetitiveEvents.slice(4,5).map(
      show=> {
        return(
           <div className={styles.event_images_five}>
      
            <img src={show.card_image}></img>
            <div className={styles.event_names_five}>
              {show.event_name}
            </div>
          </div>
        
    )})}
{props.data.CompetitiveEvents.slice(5,6).map(
      show=> {
        return(
           <div className={styles.event_images_six}>
        
            <img src={show.card_image}></img>
            <div className={styles.event_names_six}>
              {show.event_name}
            </div>
          </div>
        
    )})}
</div>
<div className={styles.footer}>
  <div className={styles.footer_img}>
 <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fqph.cf2.quoracdn.net%2Fmain-qimg-891ec2308624f8e470fe4ca966ae5a64&imgrefurl=https%3A%2F%2Fwww.quora.com%2FWhat-should-I-know-about-the-E-Summit-22-E-Cell-IIT-Roorkee&tbnid=rXP2oUCxg3eZFM&vet=12ahUKEwis1Lqmr7L4AhXqj9gFHbHlD_EQMygwegUIARCVAg..i&docid=DWb5JVyLC8GiCM&w=602&h=169&q=ecell%20iitr%20&ved=2ahUKEwis1Lqmr7L4AhXqj9gFHbHlD_EQMygwegUIARCVAg"></img>

  <div className={styles.footer_form}>
    <form>
      <input type="text" className={styles.form_name} placeholder='Name'></input><br></br>
      <input type="mail" className={styles.form_email} placeholder='Email' ></input><br></br>
      <input type="text" className={styles.form_contact} placeholder='contact no'></input> 
      <input type="text" className={styles.form_query} placeholder='query'></input><br></br>
      <input type="text" className={styles.form_message} placeholder='write your message'></input><br></br>
      <button type='button'className={styles.form_submit} value="submit">Submit</button>
    </form>
    </div>
   <div className={styles.footer_email}>
   <table className={styles.footer_table} >
    <tr>
      <th>Email</th>
      <th>Phone</th>
    </tr>
    <tr>
      <td>esummit@iitr.ac.in</td>    
      <td>
      Daksh:<br></br>
     +91 96465 83392
      </td>
      </tr>
      <tr>
     <td>
     </td>
     <td>
      Abhinandan:<br></br>
      +91 80546 89033
     </td>
      </tr>
      <tr>
        <td> </td>
        <td>
         <b>OUR ADDRESS</b> 
         E-cell office <br></br>
         SAC building<br></br>
         IIT ROORKEE<br></br>
         Roorkee<br></br>
         Uttarakhand <br></br>
         247667, INDIA <br></br>
        </td>
      </tr>
   </table>
    

    </div>

</div>
   </div>
   </div>
   )}
    


export default  show;