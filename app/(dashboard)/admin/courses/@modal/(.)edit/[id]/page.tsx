import Modal from '@/components/Modal/Modal'
import CourseUpdateForm from '../../../CourseUpdateFrom'
import handleCourseAction from '../../../actions'

export default async function page({params}: {params : {id: string}}) {
  return (
    <Modal>
        <CourseUpdateForm id={params.id} handleCourseAction={handleCourseAction} />
    </Modal>
  )
}
