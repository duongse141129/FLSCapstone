// ignore_for_file: prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import 'package:scheduler_project/home/home_page.dart';

class SemesterPage extends StatelessWidget {
  final backColor = Colors.lightGreen;

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width;
    final double height = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: AppBar(
        title: Text('Semester'),
        centerTitle: true,
        backgroundColor: Colors.green[700],
        leading: IconButton(
          onPressed: () {},
          icon: Icon(
            Icons.arrow_back_ios,
            color: Colors.white,
          ),
        ),
      ),
      body: Column(
        children: [
          Padding(
            padding: EdgeInsets.only(top: 20, left: 5, right: 5),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  margin: EdgeInsets.only(bottom: 10),
                  child: Padding(
                    padding: const EdgeInsets.only(left: 8),
                    child: Text(
                      'Semester 2023',
                      style: TextStyle(fontSize: 20),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      GestureDetector(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => HomePage()),
                          );
                        },
                        child: semester(height, width, 'Spring 2023',
                            '01/01-30/04/', 'Not Yet', Colors.pink),
                      ),
                      GestureDetector(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => HomePage()),
                          );
                        },
                        child: semester(height, width, 'Summer 2023',
                            '01/05-31/08/', 'Not Yet', Colors.orange),
                      )
                    ],
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: EdgeInsets.only(top: 20, left: 5, right: 5),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  margin: EdgeInsets.only(bottom: 10),
                  child: Padding(
                    padding: const EdgeInsets.only(left: 8),
                    child: Text(
                      'Semester 2022',
                      style: TextStyle(fontSize: 20),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      GestureDetector(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => HomePage()),
                          );
                        },
                        child: semester(height, width, 'Fall 2022',
                            '01/09-31/12/', 'On Going', Colors.blue[800]),
                      ),
                      GestureDetector(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => HomePage()),
                          );
                        },
                        child: semester(height, width, 'Summer 2022',
                            '01/05-31/08/', 'Closed', Colors.orange),
                      )
                    ],
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: EdgeInsets.only(top: 20, left: 5, right: 5),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  margin: EdgeInsets.only(bottom: 10),
                  child: Padding(
                    padding: const EdgeInsets.only(left: 8),
                    child: Text(
                      'Semester 2021',
                      style: TextStyle(fontSize: 20),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      GestureDetector(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => HomePage()),
                          );
                        },
                        child: semester(height, width, 'Fall 2021',
                            '01/09-31/12/', 'Closed', Colors.blue[800]),
                      ),
                      GestureDetector(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => HomePage()),
                          );
                        },
                        child: semester(height, width, 'Summer 2021',
                            '01/05-31/08/', 'Closed', Colors.orange),
                      )
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  semester(double height, double width, String semester, String date,
      String status, Color? color) {
    return Column(
      children: [
        Container(
          height: height * 0.17,
          width: width * 0.45,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: color,
            boxShadow: [
              BoxShadow(
                color: Colors.black38,
                offset: Offset(0, 2),
                blurRadius: 7,
              ),
            ],
          ),
          child: Column(children: [
            Container(
              padding: EdgeInsets.only(bottom: 35.7, top: 30),
              alignment: Alignment.topCenter,
              child: Text(semester,
                  style: TextStyle(fontSize: 20, color: Colors.white)),
            ),
            Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(20),
                  bottomRight: Radius.circular(20),
                ),
                color: Colors.white,
              ),
              alignment: Alignment.bottomCenter,
              padding: EdgeInsets.all(13),
              child: Text(
                '01/01-30/04 $status',
                style: TextStyle(fontSize: 15),
              ),
            ),
          ]),
        ),
      ],
    );
  }
}
