import { OfferedCourseSectionRoutes } from './../../../../university-management-core-service/src/app/modules/offeredCourseSection/offeredCourseSection.routes';
import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { RoomsRoutes } from '../modules/rooms/rooms.routes';
import { UserRoutes } from '../modules/users/user.routes';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AuthenticationRoutes } from '../modules/auth/auth.routes';
import { FacultyRoutes } from '../modules/faculty/faculty.routes';
import { BuildingRoutes } from '../modules/building/building.routes';
import { CourseRoutes } from '../modules/Course/Course.routes';
import { ManagementDepartmentRoutes } from '../modules/management-departments/managementDepartment.routes';
import { AdminRoutes } from '../modules/admins/admin.routes';
import { StudentRoutes } from '../modules/students/student.routes';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';
import { OfferedCourseRoutes } from '../modules/OfferedCourse/OfferedCourse.routes';
import { StudentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes';
import { StudentSemesterPaymentRouter } from '../modules/studentSemesterPayment/studentSemesterPayment.route';
import { paymentRoutes } from '../modules/payment/payment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthenticationRoutes
  },
  {
    path: '/admins',
    routes: AdminRoutes
  },
  {
    path: '/faculties',
    routes: FacultyRoutes
  },
  {
    path: '/students',
    routes: StudentRoutes
  },
  {
    path: '/academic-semester',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/rooms',
    routes: RoomsRoutes
  },
  {
    path: '/user',
    routes: UserRoutes
  },
  {
    path: '/academic-department',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/academic-faculty',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/buildings',
    routes: BuildingRoutes
  },
  {
    path: '/course',
    routes: CourseRoutes
  },
  {
    path: '/offered-course',
    routes: OfferedCourseRoutes
  },
  {
    path: '/departments',
    routes: ManagementDepartmentRoutes
  },
  {
    path: '/semesters',
    routes: SemesterRegistrationRoutes
  },
  {
    path: '/offered-course-section',
    routes: OfferedCourseSectionRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    routes: StudentEnrolledCourseMarkRoutes
  },
  {
    path: '/student-semester-payments',
    routes: StudentSemesterPaymentRouter
  },
  {
    path: '/payment',
    routes: paymentRoutes
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
