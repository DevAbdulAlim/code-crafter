import Modal from '@/components/Modal/Modal'
import CourseCreateForm from '../../CourseCreateForm'
import handleCourseAction from '../../actions'

export default async function page() {
  return (
    <Modal>
        <CourseCreateForm handleCourseAction={handleCourseAction} />
    </Modal>
  )
}
