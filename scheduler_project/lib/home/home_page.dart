// ignore_for_file: avoid_unnecessary_containers, prefer_const_literals_to_create_immutables, constant_identifier_names, non_constant_identifier_names

import 'package:flutter/material.dart';
import 'package:scheduler_project/home/components/my_body.dart';
import 'package:scheduler_project/home/components/my_drawer_header.dart';

class HomePage extends StatefulWidget {
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  var currentPage = DrawerSection.home;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('FLS Scheduler'),
        centerTitle: true,
        backgroundColor: Colors.green[700],
      ),
      drawer: Drawer(
        child: SingleChildScrollView(
          child: Container(
            child: Column(
              children: [
                MyHeaderDrawer(),
                //MyDrawerList(),
                DrawerList(),
              ],
            ),
          ),
        ),
      ),
      body: MyBody(),
    );
  }

  DrawerList() {
    return Container(
      padding: EdgeInsets.only(top: 15),
      child: Column(
        //show the list of menu drawer
        children: [
          menuItem(1, 'Home', Icons.dashboard_outlined,
              currentPage == DrawerSection.home ? true : false),
          menuItem(2, 'Scheduler', Icons.people_alt_outlined,
              currentPage == DrawerSection.scheduler ? true : false),
          menuItem(3, 'Semester', Icons.access_time,
              currentPage == DrawerSection.semester ? true : false),
          menuItem(4, 'My Department', Icons.business_outlined,
              currentPage == DrawerSection.department ? true : false),
          menuItem(5, 'Notification', Icons.notifications,
              currentPage == DrawerSection.notification ? true : false),
          menuItem(6, 'Profile', Icons.person,
              currentPage == DrawerSection.profile ? true : false),
          menuItem(7, 'Logout', Icons.logout_outlined,
              currentPage == DrawerSection.logout ? true : false),
        ],
      ),
    );
  }

  menuItem(int id, String title, IconData icon, bool selected) {
    return Material(
      color: selected ? Colors.grey[300] : Colors.transparent,
      child: InkWell(
        onTap: () {
          Navigator.pop(context);
          setState(() {
            //currentPage = DrawerSection.events;
            if (id == 1) {
              currentPage = DrawerSection.home;
            } else if (id == 2) {
              currentPage = DrawerSection.scheduler;
            } else if (id == 3) {
              currentPage = DrawerSection.semester;
            } else if (id == 4) {
              currentPage = DrawerSection.department;
              print(currentPage);
            } else if (id == 5) {
              currentPage = DrawerSection.notification;
              print(currentPage);
            } else if (id == 6) {
              currentPage = DrawerSection.profile;
              print(currentPage);
            } else if (id == 7) {
              currentPage = DrawerSection.logout;
              print(currentPage);
            }
          });
        },
        child: Padding(
          padding: EdgeInsets.all(10),
          child: Row(
            children: [
              Expanded(
                child: Icon(
                  icon,
                  size: 20,
                  color: Colors.black,
                ),
              ),
              Expanded(
                flex: 3,
                child: Text(
                  title,
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 16,
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}

enum DrawerSection {
  home,
  scheduler,
  semester,
  department,
  notification,
  profile,
  logout,
}
