USE [FLSCapstoneDatabase]
GO
/****** Object:  Table [dbo].[Admin]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admin](
	[ID] [varchar](30) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Email] [varchar](50) NOT NULL,
	[DOB] [date] NULL,
	[Gender] [int] NULL,
	[IDCard] [char](12) NULL,
	[Address] [nvarchar](150) NULL,
	[Phone] [varchar](11) NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[ID] [varchar](30) NOT NULL,
	[SubjectID] [varchar](30) NULL,
	[SemesterID] [varchar](30) NULL,
	[SlotTypeID] [varchar](30) NULL,
	[Description] [nvarchar](300) NULL,
	[SlotAmount] [int] NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CourseAssign]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CourseAssign](
	[ID] [varchar](30) NOT NULL,
	[LecturerID] [varchar](30) NULL,
	[CourseID] [varchar](30) NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CourseGroupItem]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CourseGroupItem](
	[ID] [varchar](30) NOT NULL,
	[LecturerCourseGroupID] [varchar](30) NULL,
	[CourseID] [varchar](30) NULL,
	[PriorityCourse] [int] NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Department]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[ID] [varchar](30) NOT NULL,
	[DepartmentName] [nvarchar](100) NULL,
	[DepartmentGroupID] [varchar](30) NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DepartmentGroup]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DepartmentGroup](
	[ID] [varchar](30) NOT NULL,
	[DepartmentGroupName] [nvarchar](100) NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DepartmentManager]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DepartmentManager](
	[ID] [varchar](30) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Email] [varchar](50) NOT NULL,
	[DOB] [date] NULL,
	[Gender] [int] NULL,
	[IDCard] [char](12) NULL,
	[Address] [nvarchar](150) NULL,
	[Phone] [varchar](11) NULL,
	[Status] [int] NOT NULL,
	[DepartmentID] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Lecturer]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Lecturer](
	[ID] [varchar](30) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Email] [varchar](50) NOT NULL,
	[DOB] [date] NULL,
	[Gender] [int] NULL,
	[IDCard] [char](12) NULL,
	[Address] [nvarchar](150) NULL,
	[Phone] [varchar](11) NULL,
	[PriorityLecturer] [int] NULL,
	[IsFullTime] [int] NULL,
	[Status] [int] NOT NULL,
	[DepartmentID] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LecturerCourseGroup]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LecturerCourseGroup](
	[ID] [varchar](30) NOT NULL,
	[LecturerID] [varchar](30) NULL,
	[SemesterID] [varchar](30) NULL,
	[GroupName] [nvarchar](30) NULL,
	[MinCourse] [int] NULL,
	[MaxCourse] [int] NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LecturerSlotConfig]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LecturerSlotConfig](
	[ID] [varchar](30) NOT NULL,
	[SlotTypeID] [varchar](30) NULL,
	[LecturerID] [varchar](30) NULL,
	[SemesterID] [varchar](30) NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Request]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Request](
	[ID] [varchar](30) NOT NULL,
	[Title] [nvarchar](100) NULL,
	[Description] [nvarchar](350) NULL,
	[DateCreate] [datetime] NULL,
	[LecturerID] [varchar](30) NULL,
	[DepartmentManagerID] [varchar](30) NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RoomSemester]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoomSemester](
	[ID] [varchar](30) NOT NULL,
	[RoomTypeName] [nvarchar](100) NULL,
	[SemesterID] [varchar](30) NULL,
	[RoomTypeID] [varchar](30) NULL,
	[Quantity] [int] NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RoomType]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoomType](
	[ID] [varchar](30) NOT NULL,
	[RoomTypeName] [nvarchar](100) NULL,
	[Capacity] [int] NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Semester]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Semester](
	[ID] [varchar](30) NOT NULL,
	[Term] [nvarchar](30) NULL,
	[DateStart] [date] NULL,
	[DateEnd] [date] NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SlotType]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SlotType](
	[ID] [varchar](30) NOT NULL,
	[TimeStart] [time](0) NULL,
	[TimeEnd] [time](0) NULL,
	[SlotNumber] [int] NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Subject]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Subject](
	[ID] [varchar](30) NOT NULL,
	[SubjectName] [nvarchar](100) NULL,
	[Description] [nvarchar](500) NULL,
	[DepartmentID] [varchar](30) NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SubjectOfLecturer]    Script Date: 10/19/2022 4:15:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SubjectOfLecturer](
	[ID] [varchar](30) NOT NULL,
	[DepartmentManagerID] [varchar](30) NULL,
	[SemesterID] [varchar](30) NULL,
	[SubjectID] [varchar](30) NULL,
	[LecturerID] [varchar](30) NULL,
	[FavoritePoint] [int] NULL,
	[FeedbackPoint] [int] NULL,
	[MaxCourseSubject] [int] NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Department] ([ID], [DepartmentName], [DepartmentGroupID], [Status]) VALUES (N'4BWoZJjEgXJoq3iEZ4FxQVLqWd8jXx', N'WWZZ', N'DG3', 1)
INSERT [dbo].[Department] ([ID], [DepartmentName], [DepartmentGroupID], [Status]) VALUES (N'8LJSqW5RHkuzNF9yEtll4XEfbe0fzy', N'EEE', N'DG2', 1)
INSERT [dbo].[Department] ([ID], [DepartmentName], [DepartmentGroupID], [Status]) VALUES (N'CFL', N'Computer', N'DG1', 1)
INSERT [dbo].[Department] ([ID], [DepartmentName], [DepartmentGroupID], [Status]) VALUES (N'ITS', N'Information', N'DG1', 1)
INSERT [dbo].[Department] ([ID], [DepartmentName], [DepartmentGroupID], [Status]) VALUES (N'LAB', N'Line of code', N'DG1', 0)
INSERT [dbo].[Department] ([ID], [DepartmentName], [DepartmentGroupID], [Status]) VALUES (N'LC', N'Lc lc ', N'DG3', 0)
INSERT [dbo].[Department] ([ID], [DepartmentName], [DepartmentGroupID], [Status]) VALUES (N'LE', N'Lec lec', N'DG4', 1)
INSERT [dbo].[Department] ([ID], [DepartmentName], [DepartmentGroupID], [Status]) VALUES (N'LO', N'hehehehe', NULL, 1)
INSERT [dbo].[Department] ([ID], [DepartmentName], [DepartmentGroupID], [Status]) VALUES (N'm31TDNT8Cca7qf16921uNCGg6te9Zh', N'TFF', NULL, 1)
INSERT [dbo].[Department] ([ID], [DepartmentName], [DepartmentGroupID], [Status]) VALUES (N'nXD435N6PsvU4UB2nj4YrjDqx0t9u3', N'SS', N'DG3', 1)
INSERT [dbo].[Department] ([ID], [DepartmentName], [DepartmentGroupID], [Status]) VALUES (N'RT9IfW4BqgVPa602gEnno2sqc7xUmT', N'qweqwe', NULL, 1)
INSERT [dbo].[Department] ([ID], [DepartmentName], [DepartmentGroupID], [Status]) VALUES (N'W1SMJddpZJ2KxV2t43SN7Ve1xuFFDF', N'GG', N'DG2', 1)
GO
INSERT [dbo].[DepartmentGroup] ([ID], [DepartmentGroupName], [Status]) VALUES (N'DG1', N'ITP', 1)
INSERT [dbo].[DepartmentGroup] ([ID], [DepartmentGroupName], [Status]) VALUES (N'DG2', N'IA', 1)
INSERT [dbo].[DepartmentGroup] ([ID], [DepartmentGroupName], [Status]) VALUES (N'DG3', N'AI', 1)
INSERT [dbo].[DepartmentGroup] ([ID], [DepartmentGroupName], [Status]) VALUES (N'DG4', N'SS', 1)
GO
INSERT [dbo].[Lecturer] ([ID], [Name], [Email], [DOB], [Gender], [IDCard], [Address], [Phone], [PriorityLecturer], [IsFullTime], [Status], [DepartmentID]) VALUES (N'A8m4HGxo5p6lfK60oXZ4OG4AR2CLLg', N'Dewr', N'string', CAST(N'2000-05-05' AS Date), 1, N'123456789255', N'15 ads', N'0987654321', 4, 1, 1, N'CFL')
INSERT [dbo].[Lecturer] ([ID], [Name], [Email], [DOB], [Gender], [IDCard], [Address], [Phone], [PriorityLecturer], [IsFullTime], [Status], [DepartmentID]) VALUES (N'L1', N'DuongDT', N'dg@gmail.com', CAST(N'2000-05-05' AS Date), 1, N'123456789255', N'15 ads', N'0987654321', 5, 1, 1, N'CFL')
INSERT [dbo].[Lecturer] ([ID], [Name], [Email], [DOB], [Gender], [IDCard], [Address], [Phone], [PriorityLecturer], [IsFullTime], [Status], [DepartmentID]) VALUES (N'L2', N'dgs', N'ddd@gmail.com', CAST(N'2000-12-16' AS Date), 0, N'123456789255', N'15 ads', N'0987654321', 4, 0, 1, N'CFL')
GO
INSERT [dbo].[RoomSemester] ([ID], [RoomTypeName], [SemesterID], [RoomTypeID], [Quantity], [Status]) VALUES (N'RS1', N'asdasd', N'FA22', N'RT1', 14, 1)
INSERT [dbo].[RoomSemester] ([ID], [RoomTypeName], [SemesterID], [RoomTypeID], [Quantity], [Status]) VALUES (N'RS2', N'qweqwe', N'FA22', N'RT2', 14, 1)
INSERT [dbo].[RoomSemester] ([ID], [RoomTypeName], [SemesterID], [RoomTypeID], [Quantity], [Status]) VALUES (N'RS3', N'er', NULL, NULL, 14, 0)
INSERT [dbo].[RoomSemester] ([ID], [RoomTypeName], [SemesterID], [RoomTypeID], [Quantity], [Status]) VALUES (N'RS4', N'sdf', NULL, NULL, 10, 1)
GO
INSERT [dbo].[RoomType] ([ID], [RoomTypeName], [Capacity], [Status]) VALUES (N'RT1', N'sdf', 14, 1)
INSERT [dbo].[RoomType] ([ID], [RoomTypeName], [Capacity], [Status]) VALUES (N'RT2', N'qwe', 12, 0)
INSERT [dbo].[RoomType] ([ID], [RoomTypeName], [Capacity], [Status]) VALUES (N'RT3', N'asd', 11, 1)
GO
INSERT [dbo].[Semester] ([ID], [Term], [DateStart], [DateEnd], [Status]) VALUES (N'FA22', N'Fall 2022', CAST(N'2022-10-18' AS Date), CAST(N'2022-10-19' AS Date), 1)
INSERT [dbo].[Semester] ([ID], [Term], [DateStart], [DateEnd], [Status]) VALUES (N'SP22', N'Spring 2022', CAST(N'2022-10-18' AS Date), CAST(N'2022-10-19' AS Date), 1)
INSERT [dbo].[Semester] ([ID], [Term], [DateStart], [DateEnd], [Status]) VALUES (N'SU22', N'Summer 2022', CAST(N'2022-10-18' AS Date), CAST(N'2022-10-19' AS Date), 1)
GO
INSERT [dbo].[SlotType] ([ID], [TimeStart], [TimeEnd], [SlotNumber], [Status]) VALUES (N'ST1', CAST(N'12:30:00' AS Time), CAST(N'07:00:00' AS Time), 4, 1)
INSERT [dbo].[SlotType] ([ID], [TimeStart], [TimeEnd], [SlotNumber], [Status]) VALUES (N'ST2', CAST(N'23:45:00' AS Time), CAST(N'07:00:00' AS Time), 6, 1)
INSERT [dbo].[SlotType] ([ID], [TimeStart], [TimeEnd], [SlotNumber], [Status]) VALUES (N'ST3', CAST(N'00:00:00' AS Time), CAST(N'07:00:00' AS Time), 5, 1)
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Admin__A9D105347BC489CB]    Script Date: 10/19/2022 4:15:35 AM ******/
ALTER TABLE [dbo].[Admin] ADD UNIQUE NONCLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Departme__A9D105347EF31A46]    Script Date: 10/19/2022 4:15:35 AM ******/
ALTER TABLE [dbo].[DepartmentManager] ADD UNIQUE NONCLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Lecturer__A9D1053421384CFF]    Script Date: 10/19/2022 4:15:35 AM ******/
ALTER TABLE [dbo].[Lecturer] ADD UNIQUE NONCLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Course]  WITH CHECK ADD FOREIGN KEY([SemesterID])
REFERENCES [dbo].[Semester] ([ID])
GO
ALTER TABLE [dbo].[Course]  WITH CHECK ADD FOREIGN KEY([SlotTypeID])
REFERENCES [dbo].[SlotType] ([ID])
GO
ALTER TABLE [dbo].[Course]  WITH CHECK ADD FOREIGN KEY([SubjectID])
REFERENCES [dbo].[Subject] ([ID])
GO
ALTER TABLE [dbo].[CourseAssign]  WITH CHECK ADD FOREIGN KEY([CourseID])
REFERENCES [dbo].[Course] ([ID])
GO
ALTER TABLE [dbo].[CourseAssign]  WITH CHECK ADD FOREIGN KEY([LecturerID])
REFERENCES [dbo].[Lecturer] ([ID])
GO
ALTER TABLE [dbo].[CourseGroupItem]  WITH CHECK ADD FOREIGN KEY([CourseID])
REFERENCES [dbo].[Course] ([ID])
GO
ALTER TABLE [dbo].[CourseGroupItem]  WITH CHECK ADD FOREIGN KEY([LecturerCourseGroupID])
REFERENCES [dbo].[LecturerCourseGroup] ([ID])
GO
ALTER TABLE [dbo].[Department]  WITH CHECK ADD FOREIGN KEY([DepartmentGroupID])
REFERENCES [dbo].[DepartmentGroup] ([ID])
GO
ALTER TABLE [dbo].[DepartmentManager]  WITH CHECK ADD FOREIGN KEY([DepartmentID])
REFERENCES [dbo].[Department] ([ID])
GO
ALTER TABLE [dbo].[Lecturer]  WITH CHECK ADD FOREIGN KEY([DepartmentID])
REFERENCES [dbo].[Department] ([ID])
GO
ALTER TABLE [dbo].[LecturerCourseGroup]  WITH CHECK ADD FOREIGN KEY([LecturerID])
REFERENCES [dbo].[Lecturer] ([ID])
GO
ALTER TABLE [dbo].[LecturerCourseGroup]  WITH CHECK ADD FOREIGN KEY([SemesterID])
REFERENCES [dbo].[Semester] ([ID])
GO
ALTER TABLE [dbo].[LecturerSlotConfig]  WITH CHECK ADD FOREIGN KEY([LecturerID])
REFERENCES [dbo].[Lecturer] ([ID])
GO
ALTER TABLE [dbo].[LecturerSlotConfig]  WITH CHECK ADD FOREIGN KEY([SemesterID])
REFERENCES [dbo].[Semester] ([ID])
GO
ALTER TABLE [dbo].[LecturerSlotConfig]  WITH CHECK ADD FOREIGN KEY([SlotTypeID])
REFERENCES [dbo].[SlotType] ([ID])
GO
ALTER TABLE [dbo].[Request]  WITH CHECK ADD FOREIGN KEY([DepartmentManagerID])
REFERENCES [dbo].[DepartmentManager] ([ID])
GO
ALTER TABLE [dbo].[Request]  WITH CHECK ADD FOREIGN KEY([LecturerID])
REFERENCES [dbo].[Lecturer] ([ID])
GO
ALTER TABLE [dbo].[RoomSemester]  WITH CHECK ADD FOREIGN KEY([RoomTypeID])
REFERENCES [dbo].[RoomType] ([ID])
GO
ALTER TABLE [dbo].[RoomSemester]  WITH CHECK ADD FOREIGN KEY([SemesterID])
REFERENCES [dbo].[Semester] ([ID])
GO
ALTER TABLE [dbo].[Subject]  WITH CHECK ADD FOREIGN KEY([DepartmentID])
REFERENCES [dbo].[Department] ([ID])
GO
ALTER TABLE [dbo].[SubjectOfLecturer]  WITH CHECK ADD FOREIGN KEY([DepartmentManagerID])
REFERENCES [dbo].[DepartmentManager] ([ID])
GO
ALTER TABLE [dbo].[SubjectOfLecturer]  WITH CHECK ADD FOREIGN KEY([LecturerID])
REFERENCES [dbo].[Lecturer] ([ID])
GO
ALTER TABLE [dbo].[SubjectOfLecturer]  WITH CHECK ADD FOREIGN KEY([SemesterID])
REFERENCES [dbo].[Semester] ([ID])
GO
ALTER TABLE [dbo].[SubjectOfLecturer]  WITH CHECK ADD FOREIGN KEY([SubjectID])
REFERENCES [dbo].[Subject] ([ID])
GO
