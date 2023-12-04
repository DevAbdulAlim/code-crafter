import Modal from '@/components/Modal/Modal'
import CourseCreateForm from '../../CourseCreateFrom'
import handleCourseAction from '../../actions'

export default async function page() {
  return (
    <Modal>
        <CourseCreateForm handleCourseAction={handleCourseAction} />
    </Modal>
  )
}
